import { ApiProperty } from '@nestjs/swagger';
import { UserSubscription } from '../../../../../generated/prisma';

export class CurrentSubscriptionsViewDto {
  @ApiProperty({
    example: 1223,
    type: 'number',
    description: 'user Id',
  })
  userId: number;
  @ApiProperty({
    example: 125,
    type: 'number',
    description: 'subscription Id',
  })
  subscriptionId: number;
  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    type: Date,
    description: 'payment date',
  })
  dateOfPayment: Date;
  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    type: Date,
    description: 'subscription end date',
  })
  endDateOfSubscription: Date;
  @ApiProperty({
    example: true,
    type: 'boolean',
    description: 'is the subscription renewed or not',
  })
  autoRenewal: boolean;

  static mapToView(
    subscriptions: UserSubscription,
  ): CurrentSubscriptionsViewDto {
    const dto = new CurrentSubscriptionsViewDto();

    dto.userId = subscriptions.userId;
    dto.subscriptionId = subscriptions.id;
    dto.dateOfPayment = subscriptions.dateOfPayment;
    dto.endDateOfSubscription = subscriptions.expireAt;
    dto.autoRenewal = subscriptions.autoRenewal;

    return dto;
  }
}
