import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  RawBodyRequest,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ExtractUserFromRequest } from '../../../user-accounts/guards/decorators/extract-user-id-from-request.decorator';
import { CreatePaymentInputDto } from './input-dto/create-payment.input-dto';
import { JwtBearerGuard } from '../../../user-accounts/guards/jwt-bearer.guard';
import { CreateBuyCommandStripe } from '../application/usecases/create-paymentStripe.usecase';
import Stripe from 'stripe';
import { SubscriptionQueryRepository } from '../infrastructure/query/subscription.query-repository';
import { AvailableSubscriptionViewDtoViewDto } from './view-dto/availableSubscriptions.view-dto';
import { CurrentSubscriptionsViewDto } from './view-dto/current-subscription.view-dto';
import { PaymentsQueryRepository } from '../infrastructure/query/payments.query-repository';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(
    private commandBus: CommandBus,
    private subscriptionQueryRepository: SubscriptionQueryRepository,
    private paymentsQueryRepository: PaymentsQueryRepository,
  ) {}
  @UseGuards(JwtBearerGuard)
  @Post()
  async createPaymentSubscription(
    @Body() paymentsInputDto: CreatePaymentInputDto,
    @ExtractUserFromRequest() userId: number,
  ): Promise<string> {
    debugger;
    if (paymentsInputDto.paymentType === 'STRIPE')
      return await this.commandBus.execute(
        new CreateBuyCommandStripe({
          userId: userId,
          baseUrl: paymentsInputDto.baseUrl,
          typeSubscription: paymentsInputDto.typeSubscription,
          amount: paymentsInputDto.amount,
        }),
      );
    return 'This type of payment is temporarily unavailable';
  }
  @UseGuards(JwtBearerGuard)
  @Post('/canceled-auto-renewal')
  async canselAutoRenewal(
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {}
  @Get('/const-of-payment-subscriptions')
  async getCostOfPaymentSubscriptions(): Promise<
    AvailableSubscriptionViewDtoViewDto[]
  > {
    return this.subscriptionQueryRepository.getAvailableSubscription();
  }
  @UseGuards(JwtBearerGuard)
  @Get('current-payment-subscription')
  async getCurrentPaymentSubscription(
    @ExtractUserFromRequest() userId: number,
  ): Promise<CurrentSubscriptionsViewDto> {
    return this.subscriptionQueryRepository.getCurrentSubscriptions(userId);
  }
  @UseGuards(JwtBearerGuard)
  @Get('my-payments')
  async getMyPayments(@ExtractUserFromRequest() userId: number): Promise<any> {
    return this.paymentsQueryRepository.getMyPayments(userId);
  }
  @UseGuards(JwtBearerGuard)
  @Post('/renew-auto-renewal')
  async renewAutoRenewal(
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {}
  @Post('stripe/notification-hook')
  notificationStripeHook(
    @Body() dataFromStripe: any,
    @Req() request: RawBodyRequest<Request>,
  ) {
    const stripe = new Stripe(
      'sk_test_51RlEqtFwkFSrQFxIw2YZ91uFvvIlA89vlRmRjWl7HgQFWrJYLpgZ5hz3Gv4IQiiOHXUbzMiRT1qrSkYFKv0vXIF000RjyDQeU5',
      {
        apiVersion: '2025-06-30.basil',
      },
    );
    const rawBodyBuffer = request.rawBody; // Buffer
    debugger;
    if (!rawBodyBuffer || !(rawBodyBuffer instanceof Buffer)) {
      throw new BadRequestException('Invalid raw body');
    }
    const signature = request.headers['stripe-signature'];
    const secret = 'whsec_Hv1BDXLrXLoK3hzQcv0lJDS7Ftzb3CQa';
    debugger;
    try {
      debugger;
      const event = stripe.webhooks.constructEvent(
        rawBodyBuffer,
        signature,
        secret,
      );
      debugger;
      if (event.type === 'checkout.session.completed') {
        debugger;
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('PAYMENT SUCCESS');
      }
      // понять какой эвент пришел и потом решать что с ним делать
      /// отваледироваать что оплата прошла успешна
      /// проверить данные которые пришли и достать паймент id
    } catch (error) {
      debugger;
      console.log(error);
      throw new BadRequestException(`Webhook Error : ${error.message}`);
    }
    /// подтвердить оплату товара
    /// отправить страйплу статут что-бы он успакоился
  }
}
