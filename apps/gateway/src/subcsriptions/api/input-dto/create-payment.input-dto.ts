import { IsEnum, IsString } from 'class-validator';
import {
  PaymentSystem,
  SubscriptionPeriod,
} from '../../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentInputDto {
  @ApiProperty({
    enum: SubscriptionPeriod,
    example: SubscriptionPeriod.MONTH,
  })
  @IsEnum(SubscriptionPeriod)
  subscriptionPeriod: SubscriptionPeriod;

  @ApiProperty({
    enum: PaymentSystem,
    description: 'Payment system to use (currently only STRIPE supported).',
    example: PaymentSystem.STRIPE,
  })
  @IsEnum(PaymentSystem)
  paymentSystem: PaymentSystem;

  @ApiProperty({
    type: String,
    description:
      'Base URL of the frontend to which the payment system will redirect after payment. success_url: baseUrl, cancel_url: baseUrl/cancel',
    example: 'https://myapp.com/payments/confirmation',
  })
  @IsString()
  baseUrl: string;
}
