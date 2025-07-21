import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  RawBodyRequest,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import Stripe from 'stripe';
import { CreatePostInputDto } from '../../bloggers-platform/posts/api/input-dto/create-post.input-dto';
import { JwtBearerGuard } from '../guards/jwt-bearer.guard';
import { ExtractUserFromRequest } from '../guards/decorators/extract-user-id-from-request.decorator';
import { PasswordUpdateCommand } from '../application/usecases/password/password-update.usecase';
import {
  BuySubscriptionUseCase,
  CreateBuyCommand,
} from '../application/usecases/payments/stripe-buy.usecase';

@Controller('payments')
export class PaymentsController {
  constructor(private commandBus: CommandBus) {}

  @Get('success')
  success(): string {
    return 'Ваш заказ оплачен, проверте статуз платеже';
  }
  @Get('error')
  error(): string {
    return 'Заказ не оплачен';
  }
  @UseGuards(JwtBearerGuard)
  @Get('/buy')
  async buy(
    @Query('productsId') productsId,
    @ExtractUserFromRequest() userId: number,
  ): Promise<string> {
    return await this.commandBus.execute(
      new CreateBuyCommand({ userId: userId, subscriptionId: productsId }),
    );
    /// возвращаем сылку для оплаты
    /// дальнейшая логика происходит в вебхуке
  }
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
    const signature = request.headers['stripe-signature'];
    const secret = 'секрет который лежит в вебхуках на страпле';
    try {
      const event = stripe.webhooks.constructEvent(
        dataFromStripe,
        signature,
        secret,
      );
      // понять какой эвент пришел и потом решать что с ним делать
      /// отваледироваать что оплата прошла успешна
      // проверить что запрос действитель пришел со страйпа
      /// проверить данные которые пришли и достать паймент id
    } catch (error) {
      throw new BadRequestException(`Webhook Error : ${error.message}`);
    }
  }
  /// подтвердить оплату товара
  /// отправить страйплу статут что-бы он успакоился
}
