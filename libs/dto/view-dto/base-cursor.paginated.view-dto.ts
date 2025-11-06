import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginatedCursorViewDto<T> {
  abstract items: T;

  @ApiProperty({
    example: 10,
  })
  pageSize: number;

  @ApiProperty({
    example: 50,
  })
  totalCount: number;

  public static mapToView<T>(data: {
    items: T;
    page: number;
    size: number;
    totalCount: number;
  }): PaginatedCursorViewDto<T> {
    return {
      pageSize: data.size,
      totalCount: data.totalCount,
      items: data.items,
    };
  }
}
