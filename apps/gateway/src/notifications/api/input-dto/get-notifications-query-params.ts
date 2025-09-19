import { NotificationsSortBy } from './notifications-sort-by';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { BaseSortableCursorPaginationParams } from '../../../../../../libs/dto/input-dto/base-cursor.query-params.input-dto';

export class GetNotificationsQueryParams extends BaseSortableCursorPaginationParams<NotificationsSortBy> {
  @ApiPropertyOptional({
    enum: NotificationsSortBy,
    default: NotificationsSortBy.CreatedAt,
    example: NotificationsSortBy.CreatedAt,
  })
  sortBy: NotificationsSortBy = NotificationsSortBy.CreatedAt;

  @ApiPropertyOptional({
    type: Number,
    description: 'Pagination cursor (id of the last notification)',
    example: 123,
  })
  @Type(() => Number)
  cursor?: number;
}
