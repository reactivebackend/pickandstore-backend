import { ApiProperty } from '@nestjs/swagger';
import {
  AvailableSubscription,
  SubscriptionPeriod,
} from '../../../../generated/prisma';
import { IsEnum } from 'class-validator';

export class AvailableSubscriptionViewDto {
  @ApiProperty({
    example: 'Weekly subscription',
    description: 'Title of the subscription plan',
  })
  title: string;

  @ApiProperty({
    enum: SubscriptionPeriod,
    example: SubscriptionPeriod.WEEK,
  })
  @IsEnum(SubscriptionPeriod)
  subscriptionPeriod: SubscriptionPeriod;

  @ApiProperty({ example: 50, description: 'Subscription cost in US dollars' })
  price: number;

  static mapToView(
    subscription: AvailableSubscription,
  ): AvailableSubscriptionViewDto {
    const dto = new AvailableSubscriptionViewDto();

    dto.title = subscription.title;
    dto.subscriptionPeriod = subscription.period;
    dto.price = subscription.price;

    return dto;
  }
}
