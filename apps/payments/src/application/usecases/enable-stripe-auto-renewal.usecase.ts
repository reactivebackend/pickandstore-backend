import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Stripe from 'stripe';
import { StripeConfig } from '../../config/stripe.config';
import { UserSubscriptionRepository } from '../../infrastructure/user-subsciption.repository';
import { PaymentsRepository } from '../../infrastructure/payments-repository';
import { calculateDate } from '../../utils/calculate-date';
import { RpcException } from '@nestjs/microservices';
import { HttpStatus } from '@nestjs/common';

export class EnableStripeAutoRenewalCommand {
  constructor(public userId: number) {}
}

@CommandHandler(EnableStripeAutoRenewalCommand)
export class EnableStripeAutoRenewalUseCase
  implements ICommandHandler<EnableStripeAutoRenewalCommand>
{
  private stripe: Stripe;

  constructor(
    private stripeConfig: StripeConfig,
    private userSubscriptionRepository: UserSubscriptionRepository,
    private paymentsRepository: PaymentsRepository,
  ) {
    this.stripe = new Stripe(this.stripeConfig.secretKey, {
      apiVersion: this.stripeConfig.apiVersion,
    });
  }

  async execute({ userId }: EnableStripeAutoRenewalCommand): Promise<void> {
    const currentSubscription =
      await this.userSubscriptionRepository.getCurrentSubscriptionWithTransaction(
        userId,
      );

    if (!currentSubscription) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'Subscriptions not found',
        field: 'subscriptions',
      });
    }

    if (currentSubscription.autoRenewal) {
      return;
    }

    const futureSubscription =
      await this.userSubscriptionRepository.getNextSubscriptionByUserId(userId);

    if (futureSubscription) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message:
          'You cannot enable auto-renewal for your current subscription because you already have a new one in the queue.',
        field: 'autoRenewal',
      });
    }

    await this.stripe.subscriptions.update(
      currentSubscription.subscriptionTransactions.externalTransactionId!,
      { cancel_at_period_end: false },
    );

    const payment =
      await this.paymentsRepository.getLastPaymentWithSubscriptionByExternalTransactionId(
        currentSubscription.subscriptionTransactions.externalTransactionId!,
      );

    const nextPaymentDate = calculateDate(
      payment!.paymentDate!,
      payment!.availableSubscription.period,
    );

    await this.userSubscriptionRepository.enableAutoRenewalAndUpdateNextPaymentDateById(
      currentSubscription.id,
      nextPaymentDate,
    );
  }
}
