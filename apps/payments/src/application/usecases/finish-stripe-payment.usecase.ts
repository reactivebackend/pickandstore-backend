import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StripeConfig } from '../../config/stripe.config';
import Stripe from 'stripe';
import {
  PaymentStatus,
  PaymentSystem,
} from '../../../../gateway/generated/prisma';
import { PaymentsRepository } from '../../infrastructure/payments-repository';
import { UserSubscriptionRepository } from '../../infrastructure/user-subsciption.repository';
import { SubscriptionRepository } from '../../infrastructure/subscription-repository';
import { calculateDate } from '../../utils/calculate-date';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { SocketNotificationsService } from '../../../../gateway/src/sockets/notificationsSocket/socket-notifications.service';
import { NotificationsRepository } from '../../../../gateway/src/notifications/infrastructure/notifications.repository';

export class FinishStripePaymentCommand {
  constructor(
    public rawBodyBuffer: Buffer<ArrayBufferLike> | undefined,
    public signature: string,
  ) {}
}

@CommandHandler(FinishStripePaymentCommand)
export class FinishStripePaymentUseCase
  implements ICommandHandler<FinishStripePaymentCommand>
{
  private readonly stripe: Stripe;

  constructor(
    private stripeConfig: StripeConfig,
    private paymentsRepository: PaymentsRepository,
    private userSubscriptionRepository: UserSubscriptionRepository,
    private subscriptionRepository: SubscriptionRepository,
    private amqpConnection: AmqpConnection,
    private socketNotificationsService: SocketNotificationsService,
    private notificationsRepository: NotificationsRepository,
  ) {
    this.stripe = new Stripe(this.stripeConfig.secretKey, {
      apiVersion: this.stripeConfig.apiVersion,
    });
  }

  async execute({ rawBodyBuffer, signature }: FinishStripePaymentCommand) {
    if (!rawBodyBuffer) return;

    const event = this.stripe.webhooks.constructEvent(
      rawBodyBuffer,
      signature,
      this.stripeConfig.eventKey,
    );

    const invoice = event.data.object as Stripe.Invoice & {
      subscription: string;
    };

    // Определяем тип события
    if (event.type === 'invoice.paid') {
      const billingReason = invoice.billing_reason;

      if (
        billingReason !== 'subscription_create' &&
        billingReason !== 'subscription_cycle'
      ) {
        return;
      }

      const stripeSubscriptionId = invoice.parent?.subscription_details
        ?.subscription as string;
      if (!stripeSubscriptionId)
        throw new Error('Subscription ID not found in invoice');

      const subscription =
        await this.stripe.subscriptions.retrieve(stripeSubscriptionId);

      const userId = +subscription.metadata.userId;
      const availableSubscriptionId = +subscription.metadata.subscriptionId;
      const paymentId = +subscription.metadata.paymentId;

      if (!userId || !availableSubscriptionId || !paymentId) {
        throw new Error(
          `Invalid metadata in Stripe subscription ${stripeSubscriptionId}`,
        );
      }

      const availableSubscription =
        await this.subscriptionRepository.getSubscriptionById(
          availableSubscriptionId,
        );
      if (!availableSubscription) {
        throw new Error(
          `Invalid subscriptionId: ${availableSubscriptionId} in Stripe metadata`,
        );
      }

      if (!invoice.status_transitions.paid_at)
        throw new Error('Invoice is not paid yet');

      const paidAtDate = new Date(invoice.status_transitions.paid_at * 1000);
      const nextPaymentDate = calculateDate(
        paidAtDate,
        availableSubscription.period,
      );

      if (billingReason === 'subscription_create') {
        // Новая подписка
        const lastQueuedSubscription =
          await this.userSubscriptionRepository.getLastQueuedSubscription(
            userId,
          );

        let subscriptionStartDate: Date;
        let subscriptionEndDate: Date;

        if (lastQueuedSubscription) {
          subscriptionStartDate = lastQueuedSubscription.subscriptionEndDate;
          subscriptionEndDate = calculateDate(
            subscriptionStartDate,
            availableSubscription.period,
          );

          // Отключаем автопродление у текущей подписки
          if (lastQueuedSubscription.autoRenewal) {
            await this.stripe.subscriptions.update(
              lastQueuedSubscription.subscriptionTransactions
                .externalTransactionId!,
              { cancel_at_period_end: true },
            );
            await this.userSubscriptionRepository.cancelAutoRenewalById(
              lastQueuedSubscription.id,
            );
          }
        } else {
          subscriptionStartDate = new Date(
            invoice.lines.data[0].period.start * 1000,
          );
          subscriptionEndDate = new Date(
            invoice.lines.data[0].period.end * 1000,
          );
        }

        const isAutoRenew = !subscription.cancel_at_period_end;

        await this.paymentsRepository.updateTransactionData(
          paymentId,
          paidAtDate,
          PaymentStatus.Confirmed,
          stripeSubscriptionId,
        );

        await this.userSubscriptionRepository.createUserSubscription(
          userId,
          availableSubscriptionId,
          paymentId,
          subscriptionStartDate,
          subscriptionEndDate,
          nextPaymentDate,
          isAutoRenew,
        );
        await this.socketNotificationsService.sendSubscriptionExpiredNotification(
          String(userId),
          `Ваша подписка активирована и действует до ${subscriptionEndDate}`,
        );
        await this.notificationsRepository.createNotification({
          userId: userId,
          notifyType: 'SUBSCRIPTION_IS_ACTIVE',
          targetDate: subscriptionEndDate,
        });
      }

      // Автопродление
      if (billingReason === 'subscription_cycle') {
        const existingUserSubscription =
          await this.paymentsRepository.getUserSubscriptionByExternalTransactionId(
            stripeSubscriptionId,
          );

        if (!existingUserSubscription) {
          throw new Error(
            `Subscription with ExternalTransactionId: ${stripeSubscriptionId} not found`,
          );
        }

        const currentStart = existingUserSubscription.subscriptionStartDate;
        const currentEnd = existingUserSubscription.subscriptionEndDate;
        const newEndDate = calculateDate(
          currentEnd,
          availableSubscription.period,
        );

        await this.userSubscriptionRepository.updateSubscriptionDates(
          existingUserSubscription.id,
          currentStart,
          newEndDate,
          nextPaymentDate,
        );

        await this.paymentsRepository.createPayment({
          userId,
          subscriptionId: availableSubscriptionId,
          paymentSystem: PaymentSystem.STRIPE,
          externalTransactionId: stripeSubscriptionId,
          paymentDate: paidAtDate,
          status: PaymentStatus.Confirmed,
        });
        await this.socketNotificationsService.sendSubscriptionExpiredNotification(
          String(userId),
          `Ваша подписка активирована и действует до ${newEndDate}`,
        );
        await this.notificationsRepository.createNotification({
          userId: userId,
          notifyType: 'SUBSCRIPTION_IS_ACTIVE',
          targetDate: newEndDate,
        });
      }

      // Уведомляем о том, что подписка активна
      await this.amqpConnection.publish(
        'subscriptions_exchange',
        'subscription_status_changed',
        {
          userId,
          hasActiveSubscription: true,
        },
      );
    }

    // Платеж не удался
    if (event.type === 'invoice.marked_uncollectible') {
      const stripeSubscriptionId = invoice.parent?.subscription_details
        ?.subscription as string;
      if (!stripeSubscriptionId)
        throw new Error('Subscription ID not found in invoice');

      const userSubscription =
        await this.paymentsRepository.getUserSubscriptionByExternalTransactionId(
          stripeSubscriptionId,
        );

      if (!userSubscription) {
        throw new Error(
          `Subscription with ExternalTransactionId: ${stripeSubscriptionId} not found`,
        );
      }

      // Отключаем автопродление
      if (userSubscription.autoRenewal) {
        await this.userSubscriptionRepository.cancelAutoRenewalById(
          userSubscription.id,
        );
      }
    }
  }
}
