import { ApiProperty } from '@nestjs/swagger';
import { PaginatedCursorViewDto } from '../../../../../../libs/dto/view-dto/base-cursor.paginated.view-dto';

export class NotificationsPaginatedViewDto<
  T,
> extends PaginatedCursorViewDto<T> {
  items: T;

  @ApiProperty({
    example: 7,
    description: 'Number of unread user notifications',
  })
  notReadCount: number;

  public static NotificationsMapToView<T>(data: {
    items: T;
    size: number;
    totalCount: number;
    notReadCount: number;
  }): NotificationsPaginatedViewDto<T> {
    return {
      pageSize: data.size,
      totalCount: data.totalCount,
      notReadCount: data.notReadCount,
      items: data.items,
    };
  }
}
