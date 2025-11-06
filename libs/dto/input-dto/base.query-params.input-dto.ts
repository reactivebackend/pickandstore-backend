import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

class PaginationParams {
  @ApiPropertyOptional({ default: 1, example: 1 })
  @Type(() => Number)
  pageNumber: number = 1;

  @ApiPropertyOptional({ default: 10, example: 10 })
  @Type(() => Number)
  pageSize: number = 10;

  calculateSkip() {
    return (this.pageNumber - 1) * this.pageSize;
  }
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export abstract class BaseSortablePaginationParams<T> extends PaginationParams {
  @ApiPropertyOptional({
    enum: SortDirection,
    default: SortDirection.Desc,
    example: SortDirection.Desc,
  })
  sortDirection: SortDirection = SortDirection.Desc;
  abstract sortBy: T;
}
