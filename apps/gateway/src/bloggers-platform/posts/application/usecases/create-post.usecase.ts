import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostDto } from '../../dto/create-post.dto';
import { PostsRepository } from '../../infrastructure/posts.repository';

export class CreatePostCommand {
  constructor(public dto: CreatePostDto) {}
}

@CommandHandler(CreatePostCommand)
export class CreatePostUseCase implements ICommandHandler<CreatePostCommand> {
  constructor(private postsRepository: PostsRepository) {}

  async execute({ dto }: CreatePostCommand): Promise<number> {
    const newPost = {
      title: dto.title,
      content: dto.content,
      imageUrl: dto.imageUrl,
      userId: dto.userId,
    };
    const post = await this.postsRepository.createPost(newPost);
    return post.id;
  }
}
