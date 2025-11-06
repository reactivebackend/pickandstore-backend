import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SortDirection } from './base.query-params.input-dto';

export abstract class BaseSortableCursorPaginationParams<T> {
  @ApiPropertyOptional({ default: 10, example: 10 })
  @Type(() => Number)
  pageSize: number = 10;

  @ApiPropertyOptional({
    enum: SortDirection,
    default: SortDirection.Desc,
    example: SortDirection.Desc,
  })
  sortDirection: SortDirection = SortDirection.Desc;
  abstract sortBy: T;
}
