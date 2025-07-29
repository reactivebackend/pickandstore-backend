import { ApiProperty } from '@nestjs/swagger';
import { SubscriptionTransactions } from '../../../../../generated/prisma';

export class MyPaymentsViewDtoViewDto {
  @ApiProperty({ example: 123, description: 'user Id' })
  userId: number;
  @ApiProperty({ example: 123, description: 'subscription Id' })
  subscriptionId: number;
  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    description: 'date payment',
  })
  dateOfPayment: Date | null;
  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    description: 'end date subscription',
  })
  endDateOfSubscription: Date | null;
  @ApiProperty({ example: 123, description: ' price' })
  price: number;
  @ApiProperty({ example: 'MONTHLY', description: 'subscription type' })
  subscriptionType: string;
  @ApiProperty({ example: 'STRIPE', description: 'payment type' })
  paymentType: string;
  @ApiProperty({
    example: 'champagnepapi',
    description: 'name subscription',
  })
  static mapToView(
    payments: SubscriptionTransactions,
  ): MyPaymentsViewDtoViewDto {
    const dto = new MyPaymentsViewDtoViewDto();

    dto.userId = payments.userId;
    dto.subscriptionId = payments.subscriptionId;
    dto.dateOfPayment = payments.dateOfPayment;
    dto.endDateOfSubscription = payments.endDateOfSubscription;
    dto.price = payments.price;
    dto.subscriptionType = payments.subscriptionType;
    dto.paymentType = payments.paymentSystems;

    return dto;
  }
}
