import { PrismaService } from '../../../../../prisma/prisma.service';
import { PostViewDto } from '../../api/view-dto/post.view-dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DeletionStatus } from '../../../../../generated/prisma';
import { PaginatedViewDto } from '../../../../../../../libs/dto/view-dto/base.paginated.view-dto';
import { GetPostsQueryParams } from '../../api/input-dto/get-posts-query-params';

@Injectable()
export class PostsQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getPostByIdOrNotFoundFail(id: number): Promise<PostViewDto> {
    const post = await this.prismaService.post.findUnique({
      where: {
        id: id,
        deletionStatus: DeletionStatus.NotDeleted,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return PostViewDto.mapToView(post);
  }

  async getAllUserPosts(
    query: GetPostsQueryParams,
    userId: number,
  ): Promise<PaginatedViewDto<PostViewDto[]>> {
    const [posts, totalCount] = await this.prismaService.$transaction([
      this.prismaService.post.findMany({
        where: {
          userId: userId,
          deletionStatus: DeletionStatus.NotDeleted,
        },
        orderBy: { [query.sortBy]: query.sortDirection },
        skip: query.calculateSkip(),
        take: query.pageSize,
        include: {
          user: {
            select: {
              username: true,
            },
          },
        },
      }),
      this.prismaService.post.count({
        where: {
          userId: userId,
          deletionStatus: DeletionStatus.NotDeleted,
        },
      }),
    ]);

    const items = posts.map((post) => PostViewDto.mapToView(post));

    return PaginatedViewDto.mapToView({
      items,
      totalCount,
      page: query.pageNumber,
      size: query.pageSize,
    });
  }
}
