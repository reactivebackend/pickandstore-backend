import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Stripe from 'stripe';
import { StripeConfig } from '../../config/stripe.config';
import { UserSubscriptionRepository } from '../../infrastructure/user-subsciption.repository';
import { RpcException } from '@nestjs/microservices';
import { HttpStatus } from '@nestjs/common';

export class DisableStripeAutoRenewalCommand {
  constructor(public userId: number) {}
}

@CommandHandler(DisableStripeAutoRenewalCommand)
export class DisableStripeAutoRenewalUseCase
  implements ICommandHandler<DisableStripeAutoRenewalCommand>
{
  private stripe: Stripe;

  constructor(
    private stripeConfig: StripeConfig,
    private userSubscriptionRepository: UserSubscriptionRepository,
  ) {
    this.stripe = new Stripe(this.stripeConfig.secretKey, {
      apiVersion: this.stripeConfig.apiVersion,
    });
  }

  async execute({ userId }: DisableStripeAutoRenewalCommand): Promise<void> {
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

    if (!currentSubscription.autoRenewal) {
      return;
    }

    await this.stripe.subscriptions.update(
      currentSubscription.subscriptionTransactions.externalTransactionId!,
      { cancel_at_period_end: true },
    );

    await this.userSubscriptionRepository.cancelAutoRenewalById(
      currentSubscription.id,
    );
  }
}
