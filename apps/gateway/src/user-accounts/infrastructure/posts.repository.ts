import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Post } from '../../../generated/prisma';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class PostsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createPost(dto: CreatePostDto): Promise<Post> {
    console.log(dto.imageUrl);
    return this.prismaService.post.create({
      data: {
        userId: dto.userId,
        content: dto.content,
        imageUrl: dto.imageUrl,
        title: dto.title,
      },
    });
  }
}
