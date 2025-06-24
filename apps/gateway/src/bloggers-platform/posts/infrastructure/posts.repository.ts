import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { DeletionStatus, Post } from '../../../../generated/prisma';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class PostsRepository {
  constructor(private prismaService: PrismaService) {}

  async createPost(dto: CreatePostDto): Promise<Post> {
    return this.prismaService.post.create({
      data: {
        userId: dto.userId,
        description: dto.description,
        imageUrl: dto.imageUrl,
      },
    });
  }

  async getPostByIdAndUserIdOrFails(id: number, userId: number): Promise<Post> {
    const post = await this.prismaService.post.findUnique({
      where: {
        id: id,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (userId !== post.userId) {
      throw new ForbiddenException("Trying to get another user's post");
    }

    return post;
  }

  async updatePost(id: number, description: string): Promise<Post> {
    return this.prismaService.post.update({
      where: {
        id: id,
        deletionStatus: DeletionStatus.NotDeleted,
      },
      data: {
        description: description,
      },
    });
  }

  async makeDeleted(id: number) {
    await this.prismaService.post.update({
      where: {
        id: id,
      },
      data: {
        deletionStatus: DeletionStatus.Deleted,
      },
    });
  }
}
