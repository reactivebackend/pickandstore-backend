import { PrismaService } from '../../../../../prisma/prisma.service';
import { PostViewDto } from '../../api/view-dto/post.view-dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DeletionStatus } from '../../../../../generated/prisma';

@Injectable()
export class PostsQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getPostByIdOrNotFoundFail(id: number): Promise<PostViewDto> {
    const post = await this.prismaService.post.findUnique({
      where: {
        id: id,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return PostViewDto.mapToView(post);
  }
}
