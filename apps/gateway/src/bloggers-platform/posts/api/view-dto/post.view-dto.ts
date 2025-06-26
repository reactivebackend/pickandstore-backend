import { Post } from '../../../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

export class PostViewDto {
  @ApiProperty({ example: 123, description: 'Unique identifier of the post' })
  id: number;

  @ApiProperty({
    example: 'champagnepapi',
    description: 'Username of the author of the post',
  })
  username: string;

  @ApiProperty({
    example: 'Post description text',
    description: 'Description of the post',
  })
  description: string;

  @ApiProperty({
    example: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.png',
    ],
    description: 'Array of URLs of images attached to the post',
    type: [String],
  })
  imageUrl: string[];

  @ApiProperty({
    example: '2025-06-25T15:42:00.000Z',
    description: 'Timestamp when the post was created',
  })
  createdAt: Date;

  static mapToView(post: Post & { user: { username: string } }): PostViewDto {
    const dto = new PostViewDto();

    dto.id = post.id;
    dto.username = post.user.username;
    dto.description = post.description;
    dto.imageUrl = post.imageUrl;
    dto.createdAt = post.createdAt;

    return dto;
  }
}
