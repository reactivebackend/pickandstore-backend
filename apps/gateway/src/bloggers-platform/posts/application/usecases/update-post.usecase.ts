import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PostsRepository } from '../../infrastructure/posts.repository';

export class UpdatePostCommand {
  constructor(
    public postId: number,
    public userId: number,
    public description: string,
  ) {}
}

@CommandHandler(UpdatePostCommand)
export class UpdatePostUseCase implements ICommandHandler<UpdatePostCommand> {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    postId,
    userId,
    description,
  }: UpdatePostCommand): Promise<number> {
    await this.postsRepository.getPostByIdAndUserIdOrFails(postId, userId);
    const post = await this.postsRepository.updatePost(postId, description);

    return post.id;
  }
}
