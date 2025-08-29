import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ExtractUserFromRequest } from '../../user-accounts/guards/decorators/extract-user-id-from-request.decorator';
import { CreatePaymentInputDto } from './input-dto/create-payment.input-dto';
import { JwtBearerGuard } from '../../user-accounts/guards/jwt-bearer.guard';
import { AvailableSubscriptionViewDto } from './view-dto/available-subscriptions.view-dto';
import { UserSubscriptionViewDto } from './view-dto/user-subscription-view.dto';
import { PaymentSystem } from '../../../generated/prisma';
import { ClientProxy } from '@nestjs/microservices';
import { handleRpcError } from '../../../../../libs/exceptions/rpc-exceptions';
import { MyPaymentsViewDto } from './view-dto/my-payments.view-dto';
import {
  CreatePaymentSubscriptionDocs,
  DisableAutoRenewalDocs,
  EnableAutoRenewalDocs,
  GetAvailableSubscriptionsDocs,
  GetCurrentPaidSubscriptionsDocs,
  GetMyPaymentsDocs,
} from '../docs/subscriptions.docs';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateUserSubscriptionStatusCommand } from '../application/usecases/update-user-subscription-status.usecase';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(
    @Inject('PAYMENTS_SERVICE') private paymentsClient: ClientProxy,
    private commandBus: CommandBus,
  ) {}

  @CreatePaymentSubscriptionDocs()
  @UseGuards(JwtBearerGuard)
  @Post()
  async createPaymentSubscription(
    @Body() paymentsInputDto: CreatePaymentInputDto,
    @ExtractUserFromRequest() userId: number,
  ): Promise<string> {
    if (paymentsInputDto.paymentSystem === PaymentSystem.STRIPE) {
      try {
        return await this.paymentsClient
          .send('create_subscription_payment', {
            userId,
            baseUrl: paymentsInputDto.baseUrl,
            period: paymentsInputDto.subscriptionPeriod,
          })
          .toPromise();
      } catch (error) {
        handleRpcError(error);
      }
    }

    return 'This type of payment is temporarily unavailable';
  }

  @DisableAutoRenewalDocs()
  @UseGuards(JwtBearerGuard)
  @Post('/disable-auto-renewal')
  @HttpCode(HttpStatus.NO_CONTENT)
  async disableAutoRenewal(
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {
    try {
      return await this.paymentsClient
        .send('disable_auto_renewal', userId)
        .toPromise();
    } catch (error) {
      handleRpcError(error);
    }
  }

  @EnableAutoRenewalDocs()
  @UseGuards(JwtBearerGuard)
  @Post('/enable-auto-renewal')
  @HttpCode(HttpStatus.NO_CONTENT)
  async enableAutoRenewal(
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {
    try {
      return await this.paymentsClient
        .send('enable_auto_renewal', userId)
        .toPromise();
    } catch (error) {
      handleRpcError(error);
    }
  }

  @GetAvailableSubscriptionsDocs()
  @UseGuards(JwtBearerGuard)
  @Get('/available-subscriptions')
  async getAvailableSubscriptions(): Promise<AvailableSubscriptionViewDto[]> {
    return await this.paymentsClient
      .send('get_available_subscriptions', {})
      .toPromise();
  }

  @GetCurrentPaidSubscriptionsDocs()
  @UseGuards(JwtBearerGuard)
  @Get('current-paid-subscriptions')
  async getCurrentPaidSubscriptions(
    @ExtractUserFromRequest() userId: number,
  ): Promise<UserSubscriptionViewDto[]> {
    try {
      return await this.paymentsClient
        .send('get_current_paid_subscriptions', userId)
        .toPromise();
    } catch (error) {
      handleRpcError(error);
    }
  }

  @GetMyPaymentsDocs()
  @UseGuards(JwtBearerGuard)
  @Get('my-payments')
  async getMyPayments(
    @ExtractUserFromRequest() userId: number,
  ): Promise<MyPaymentsViewDto[] | undefined> {
    try {
      return await this.paymentsClient
        .send('get_my_payments', userId)
        .toPromise();
    } catch (error) {
      handleRpcError(error);
    }
  }

  @RabbitSubscribe({
    exchange: 'subscriptions_exchange',
    routingKey: 'subscription_status_changed',
    queue: 'subscription_status_changed_queue',
  })
  async updateUserSubscriptionStatus(data: {
    userId: number;
    hasActiveSubscription: boolean;
  }): Promise<void> {
    return this.commandBus.execute(
      new UpdateUserSubscriptionStatusCommand(
        data.userId,
        data.hasActiveSubscription,
      ),
    );
  }

  @Post('stripe/notification-hook')
  async stripeWebhook(@Req() req: Request) {
    try {
      const rawBodyBuffer = req.body as unknown as Buffer;
      const signature = req.headers['stripe-signature'] as string;

      return await this.paymentsClient
        .send('stripe_webhook', {
          rawBodyBase64: rawBodyBuffer.toString('base64'),
          signature,
        })
        .toPromise();
    } catch (error) {
      handleRpcError(error);
    }
  }
}
