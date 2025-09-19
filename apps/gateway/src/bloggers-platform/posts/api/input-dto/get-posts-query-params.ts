import { BaseSortablePaginationParams } from '../../../../../../../libs/dto/input-dto/base.query-params.input-dto';
import { PostsSortBy } from './posts-sort-by';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetPostsQueryParams extends BaseSortablePaginationParams<PostsSortBy> {
  @ApiPropertyOptional({
    enum: PostsSortBy,
    default: PostsSortBy.CreatedAt,
    example: PostsSortBy.CreatedAt,
  })
  sortBy = PostsSortBy.CreatedAt;
}
