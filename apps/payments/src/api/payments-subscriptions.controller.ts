import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateStripePaymentCommand } from '../application/usecases/create-stripe-payment.usecase';
import { FinishStripePaymentCommand } from '../application/usecases/finish-stripe-payment.usecase';
import { CreateStripePaymentDto } from '../dto/stripe-payment.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DisableStripeAutoRenewalCommand } from '../application/usecases/disable-stripe-auto-renewal.usecase';
import { EnableStripeAutoRenewalCommand } from '../application/usecases/enable-stripe-auto-renewal.usecase';
import { AvailableSubscriptionViewDto } from '../../../gateway/src/subcsriptions/api/view-dto/available-subscriptions.view-dto';
import { SubscriptionQueryRepository } from '../infrastructure/query/subscription.query-repository';
import { UserSubscriptionViewDto } from '../../../gateway/src/subcsriptions/api/view-dto/user-subscription-view.dto';
import { UserSubscriptionQueryRepository } from '../infrastructure/query/user-subscription.query-repository';
import { MyPaymentsViewDto } from '../../../gateway/src/subcsriptions/api/view-dto/my-payments.view-dto';
import { PaymentsQueryRepository } from '../infrastructure/query/payments.query-repository';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CheckExpiredSubscriptionsCommand } from '../application/usecases/check-expired-subscriptions.usecase';

@Controller()
export class PaymentsSubscriptionsController {
  constructor(
    private commandBus: CommandBus,
    private subscriptionQueryRepository: SubscriptionQueryRepository,
    private userSubscriptionQueryRepository: UserSubscriptionQueryRepository,
    private paymentsQueryRepository: PaymentsQueryRepository,
  ) {}

  @MessagePattern('create_subscription_payment')
  async createStripePayment(
    @Payload() dto: CreateStripePaymentDto,
  ): Promise<string> {
    return this.commandBus.execute(new CreateStripePaymentCommand(dto));
  }

  @MessagePattern('disable_auto_renewal')
  async disableAutoRenewal(@Payload() userId: number): Promise<string> {
    return this.commandBus.execute(new DisableStripeAutoRenewalCommand(userId));
  }

  @MessagePattern('enable_auto_renewal')
  async enableAutoRenewal(@Payload() userId: number): Promise<string> {
    return this.commandBus.execute(new EnableStripeAutoRenewalCommand(userId));
  }

  @MessagePattern('get_available_subscriptions')
  async getAvailableSubscriptions(): Promise<AvailableSubscriptionViewDto[]> {
    return this.subscriptionQueryRepository.getAvailableSubscriptions();
  }

  @MessagePattern('get_current_paid_subscriptions')
  async getCurrentPaidSubscriptions(
    @Payload() userId: number,
  ): Promise<UserSubscriptionViewDto[]> {
    return this.userSubscriptionQueryRepository.getSubscriptionsOrNotFoundFail(
      userId,
    );
  }

  @MessagePattern('get_my_payments')
  async getMyPayments(@Payload() userId: number): Promise<MyPaymentsViewDto[]> {
    return this.paymentsQueryRepository.getMyPaymentsOrNotFoundFail(userId);
  }

  @MessagePattern('stripe_webhook')
  async stripeWebhook(
    @Payload() data: { rawBodyBase64: string; signature: string },
  ) {
    const rawBodyBuffer = Buffer.from(data.rawBodyBase64, 'base64');

    await this.commandBus.execute(
      new FinishStripePaymentCommand(rawBodyBuffer, data.signature),
    );

    return { status: 'ok' };
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async checkExpiredSubscriptions() {
    return this.commandBus.execute(new CheckExpiredSubscriptionsCommand());
  }
}
