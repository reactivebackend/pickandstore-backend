import { ApiProperty } from '@nestjs/swagger';
import {
  SubscriptionPeriod,
  UserSubscription,
} from '../../../../generated/prisma';

type UserSubscriptionWithPeriod = UserSubscription & {
  availableSubscription: {
    period: SubscriptionPeriod;
  };
};

export class UserSubscriptionViewDto {
  @ApiProperty({
    example: 125,
    type: 'number',
    description: 'Unique ID of the user subscription',
  })
  subscriptionId: number;

  @ApiProperty({
    example: 1223,
    type: 'number',
    description: 'User ID to which this subscription belongs',
  })
  userId: number;

  @ApiProperty({
    enum: SubscriptionPeriod,
    example: SubscriptionPeriod.MONTH,
  })
  subscriptionPeriod: SubscriptionPeriod;

  @ApiProperty({
    example: '2025-06-01T12:00:00.000Z',
    type: Date,
    description: 'Subscription start date',
  })
  subscriptionStartDate: Date;

  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    type: Date,
    description: 'Subscription end date',
  })
  subscriptionEndDate: Date;

  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    type: Date,
    description: 'Next payment date (if auto-renewal is enabled)',
    nullable: true,
  })
  nextPaymentDate: Date | null;

  @ApiProperty({
    example: true,
    type: 'boolean',
    description: 'Indicates whether the subscription will auto-renew',
  })
  autoRenewal: boolean;

  static mapToView(
    userSubscription: UserSubscriptionWithPeriod,
  ): UserSubscriptionViewDto {
    const dto = new UserSubscriptionViewDto();

    dto.subscriptionId = userSubscription.id;
    dto.userId = userSubscription.userId;
    dto.subscriptionPeriod = userSubscription.availableSubscription.period;
    dto.subscriptionStartDate = userSubscription.subscriptionStartDate;
    dto.subscriptionEndDate = userSubscription.subscriptionEndDate;
    dto.nextPaymentDate = userSubscription.nextPaymentDate;
    dto.autoRenewal = userSubscription.autoRenewal;

    return dto;
  }
}
