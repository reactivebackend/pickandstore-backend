import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Stripe from 'stripe';
import { CreateStripePaymentDto } from '../../dto/stripe-payment.dto';
import { PaymentsRepository } from '../../infrastructure/payments-repository';
import { SubscriptionRepository } from '../../infrastructure/subscription-repository';
import { CreatePaymentDto } from '../../dto/create-payment.dto';
import { BadRequestDomainException } from '../../../../../../../libs/exceptions/domain-exceptions';

export class CreateBuyCommandStripe {
  constructor(public dto: CreateStripePaymentDto) {}
}

@CommandHandler(CreateBuyCommandStripe)
export class BuySubscriptionUseCase
  implements ICommandHandler<CreateBuyCommandStripe>
{
  constructor(
    private readonly paymentsRepository: PaymentsRepository,
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async execute({
    dto,
  }: CreateBuyCommandStripe): Promise<string | null | undefined> {
    const findSubscription =
      await this.subscriptionRepository.findSubscriptionByType(
        dto.typeSubscription,
      );
    const paymentDto: CreatePaymentDto = {
      userId: Number(dto.userId),
      url: '',
      price: dto.amount,
      description: dto.typeSubscription,
      productIds: findSubscription.id,
      subscriptionType: dto.typeSubscription,
    };
    const paymentData = await this.paymentsRepository.createPayment(paymentDto);
    const stripe = new Stripe(
      'sk_test_51RlEqtFwkFSrQFxIw2YZ91uFvvIlA89vlRmRjWl7HgQFWrJYLpgZ5hz3Gv4IQiiOHXUbzMiRT1qrSkYFKv0vXIF000RjyDQeU5',
      {
        apiVersion: '2025-06-30.basil',
      },
    );
    try {
      const session = await stripe.checkout.sessions.create({
        success_url: dto.baseUrl, //// сылка на фронтовую часть
        cancel_url: 'http://localhost:3000/api/v1/payments/error', //// сылка на фронтовую часть
        line_items: [
          {
            price_data: {
              recurring: {
                interval: 'week', /// автоматическое продление подписки ,было week
              },
              product_data: {
                name: 'Products with ids:' + findSubscription.id,
                description: findSubscription.title, /// описание товара
              },
              unit_amount: dto.amount, /// в центах
              currency: 'USD',
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        client_reference_id: String(paymentData.id), /// ид сформированого платежа нами в таблице 48 минута
      });

      await this.paymentsRepository.updatePaymentUrl(
        paymentData.id,
        session.url,
      );
      return session.url;
    } catch (error) {
      throw BadRequestDomainException.create(error);
    }
  }
}
