import { Post } from '../../../../../generated/prisma';

export class PostViewDto {
  id: number;
  description: string;
  imageUrl: Array<string>;

  static mapToView(post: Post): PostViewDto {
    const dto = new PostViewDto();

    dto.id = post.id;
    dto.description = post.description;
    dto.imageUrl = post.imageUrl;

    return dto;
  }
}
