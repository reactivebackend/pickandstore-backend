import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Stripe from 'stripe';
import { CreateStripePaymentDto } from '../../dto/stripe-payment.dto';
import { PaymentsRepository } from '../../infrastructure/payments-repository';
import { SubscriptionRepository } from '../../infrastructure/subscription-repository';
import { CreatePaymentDto } from '../../dto/create-payment.dto';
import { StripeConfig } from '../../config/stripe.config';
import { intervalMap } from '../../dto/interval-map.dto';
import { PaymentSystem } from '../../../../gateway/generated/prisma';
import { RpcException } from '@nestjs/microservices';
import { HttpStatus } from '@nestjs/common';

export class CreateStripePaymentCommand {
  constructor(public dto: CreateStripePaymentDto) {}
}

@CommandHandler(CreateStripePaymentCommand)
export class CreateStripePaymentUseCase
  implements ICommandHandler<CreateStripePaymentCommand>
{
  private readonly stripe: Stripe;

  constructor(
    private subscriptionRepository: SubscriptionRepository,
    private paymentsRepository: PaymentsRepository,
    private stripeConfig: StripeConfig,
  ) {
    this.stripe = new Stripe(this.stripeConfig.secretKey, {
      apiVersion: this.stripeConfig.apiVersion,
    });
  }

  async execute({ dto }: CreateStripePaymentCommand): Promise<string | null> {
    const subscription =
      await this.subscriptionRepository.getSubscriptionByPeriod(dto.period);

    if (!subscription) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'Subscription not found',
        field: 'subscriptionPeriod',
      });
    }

    const paymentDto: CreatePaymentDto = {
      userId: +dto.userId,
      subscriptionId: subscription.id,
      paymentSystem: PaymentSystem.STRIPE,
    };

    const payment = await this.paymentsRepository.createPayment(paymentDto);

    try {
      const session = await this.stripe.checkout.sessions.create({
        success_url: dto.baseUrl,
        cancel_url: dto.baseUrl + '/cancel',
        line_items: [
          {
            price_data: {
              recurring: {
                interval: intervalMap[subscription.period],
              },
              product_data: {
                name: 'Subscription #' + subscription.id,
                description: subscription.title,
              },
              unit_amount: subscription.price * 100,
              currency: 'USD',
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        client_reference_id: String(payment.id),
        subscription_data: {
          metadata: {
            userId: dto.userId,
            subscriptionId: subscription.id,
            paymentId: payment.id,
          },
        },
      });

      await this.paymentsRepository.updatePaymentUrl(payment.id, session.url!);

      return session.url;
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error instanceof Error ? error.message : 'Stripe error',
        field: 'stripe',
      });
    }
  }
}
