import { Subscription, UserAvatar } from '../../../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

export class CurrentSubscriptionsViewDto {
  @ApiProperty({
    /*example: 'https://cdn.example.com/avatars/user1.jpg',
    description: 'Public URL of the uploaded avatar',*/
  })
  expireAt: Date;

  @ApiProperty({
    /* example: '2025-07-01T12:00:00.000Z',
    type: Date,
    description: 'Upload date of avatar',*/
  })
  nextPayment: Date;

  static mapToView(subscriptions: Subscription): CurrentSubscriptionsViewDto {
    const dto = new CurrentSubscriptionsViewDto();

    dto.expireAt = subscriptions.expireAt;
    dto.nextPayment = subscriptions.nextPaymentDate;

    return dto;
  }
}
