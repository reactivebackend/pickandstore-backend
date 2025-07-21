import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Stripe from 'stripe';
import { CreateStripePaymentDto } from '../../../dto/stripe-payment.dto';
import { SubscriptionRepository } from '../../../infrastructure/subscription-repository';
import { PaymentsRepository } from '../../../infrastructure/payments-repository';
import { CreatePaymentDto } from '../../../dto/create-payment.dto';

export class CreateBuyCommand {
  constructor(public dto: CreateStripePaymentDto) {}
}

@CommandHandler(CreateBuyCommand)
export class BuySubscriptionUseCase
  implements ICommandHandler<CreateBuyCommand>
{
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
    private readonly paymentsRepository: PaymentsRepository,
  ) {}

  async execute({ dto }: CreateBuyCommand): Promise<string | null> {
    const findSubscription =
      await this.subscriptionRepository.findSubscriptionById(
        Number(dto.subscriptionId),
      );
    const paymentDto: CreatePaymentDto = {
      userId: Number(dto.userId),
      url: '',
      price: findSubscription.price,
      description: findSubscription.title,
      productIds: Number(dto.subscriptionId),
    };
    const paymentData = await this.paymentsRepository.createPayment(paymentDto);
    const stripe = new Stripe(
      'sk_test_51RlEqtFwkFSrQFxIw2YZ91uFvvIlA89vlRmRjWl7HgQFWrJYLpgZ5hz3Gv4IQiiOHXUbzMiRT1qrSkYFKv0vXIF000RjyDQeU5',
      {
        apiVersion: '2025-06-30.basil',
      },
    );
    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000/api/v1/payments/success', //// сылка на фронтовую часть
      cancel_url: 'http://localhost:3000/api/v1/payments/error', //// сылка на фронтовую часть
      line_items: [
        {
          price_data: {
            recurring: {
              interval: 'week', /// автоматическое продление подписки
            },
            product_data: {
              name: 'Products with ids:' + dto.subscriptionId,
              description: findSubscription.title, /// описание товара
            },
            unit_amount: findSubscription.price, /// в центах
            currency: 'USD',
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      client_reference_id: String(paymentData.id), /// ид сформированого платежа нами в таблице 48 минута
    });
    // @ts-ignore
    await this.paymentsRepository.updatePaymentUrl(paymentData.id, session.url);
    return session.url;
  }
}
