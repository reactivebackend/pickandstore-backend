import { ApiProperty } from '@nestjs/swagger';
import { AvailableSubscription } from '../../../../../generated/prisma';

export class AvailableSubscriptionViewDtoViewDto {
  @ApiProperty({ example: 123, description: 'subscription price' })
  amount: number;

  @ApiProperty({
    example: 'champagnepapi',
    description: 'name subscription',
  })
  typeDescription: string;

  static mapToView(
    subscription: AvailableSubscription,
  ): AvailableSubscriptionViewDtoViewDto {
    const dto = new AvailableSubscriptionViewDtoViewDto();

    dto.amount = subscription.price;
    dto.typeDescription = subscription.typeSubscription;

    return dto;
  }
}
