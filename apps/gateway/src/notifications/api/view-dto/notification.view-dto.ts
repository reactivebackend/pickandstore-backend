import { ApiProperty } from '@nestjs/swagger';
import { UserNotification } from '../../../../generated/prisma';

export class NotificationViewDto {
  @ApiProperty({
    example: 123,
  })
  id: number;

  @ApiProperty({
    example: 'Your next payment will be charged in 1 day',
  })
  message: string;

  @ApiProperty({
    type: Boolean,
  })
  isRead: boolean;

  @ApiProperty({
    example: '2025-06-25T15:42:00.000Z',
  })
  createdAt: Date;

  static mapToView(notification: UserNotification): NotificationViewDto {
    const dto = new NotificationViewDto();

    dto.id = notification.id;
    dto.message = notification.message;
    dto.isRead = notification.isRead;
    dto.createdAt = notification.createdAt;

    return dto;
  }
}
