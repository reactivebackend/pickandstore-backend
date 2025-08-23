import { ApiProperty } from '@nestjs/swagger';
import {
  AvailableSubscription,
  PaymentSystem,
  SubscriptionPeriod,
  SubscriptionTransactions,
  UserSubscription,
} from '../../../../generated/prisma';

export class MyPaymentsViewDto {
  @ApiProperty({
    example: 987,
    description: 'Unique ID of the payment transaction',
    type: 'number',
  })
  paymentId: number;

  @ApiProperty({
    example: 123,
    description: 'ID of the subscription associated with this payment',
    type: 'number',
  })
  subscriptionId: number;

  @ApiProperty({
    example: 456,
    description: 'User ID who made the payment',
    type: 'number',
  })
  userId: number;

  @ApiProperty({
    enum: SubscriptionPeriod,
    example: SubscriptionPeriod.MONTH,
  })
  subscriptionPeriod: SubscriptionPeriod;

  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    description: 'Date of the payment',
    type: Date,
  })
  paymentDate: Date;

  @ApiProperty({
    example: 50,
    description: 'Payment amount in US dollars',
    type: 'number',
  })
  price: number;

  @ApiProperty({
    enum: PaymentSystem,
    example: PaymentSystem.STRIPE,
    description: 'Payment system used for the transaction',
  })
  paymentSystem: PaymentSystem;

  static mapToView(
    payment: SubscriptionTransactions & {
      availableSubscription: AvailableSubscription;
      userSubscription: UserSubscription | null;
    },
  ): MyPaymentsViewDto {
    const dto = new MyPaymentsViewDto();

    dto.paymentId = payment.id;
    dto.subscriptionId = payment.userSubscription!.id;
    dto.userId = payment.userId;
    dto.subscriptionPeriod = payment.availableSubscription.period;
    dto.paymentDate = payment.paymentDate!;
    dto.price = payment.availableSubscription.price;
    dto.paymentSystem = payment.paymentSystem;

    return dto;
  }
}
