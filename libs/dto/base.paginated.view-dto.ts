import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginatedViewDto<T> {
  abstract items: T;
  @ApiProperty({
    example: 50,
  })
  totalCount: number;

  @ApiProperty({
    example: 5,
  })
  pagesCount: number;

  @ApiProperty({
    example: 1,
  })
  page: number;

  @ApiProperty({
    example: 10,
  })
  pageSize: number;

  public static mapToView<T>(data: {
    items: T;
    page: number;
    size: number;
    totalCount: number;
  }): PaginatedViewDto<T> {
    return {
      totalCount: data.totalCount,
      pagesCount: Math.ceil(data.totalCount / data.size),
      page: data.page,
      pageSize: data.size,
      items: data.items,
    };
  }
}
