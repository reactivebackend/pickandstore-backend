import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PostsRepository } from '../../infrastructure/posts.repository';

export class DeletePostCommand {
  constructor(
    public postId: number,
    public userId: number,
  ) {}
}

@CommandHandler(DeletePostCommand)
export class DeletePostUseCase implements ICommandHandler<DeletePostCommand> {
  constructor(private postsRepository: PostsRepository) {}

  async execute({ postId, userId }: DeletePostCommand): Promise<void> {
    await this.postsRepository.getPostByIdAndUserIdOrFails(postId, userId);
    await this.postsRepository.makeDeleted(postId);
  }
}
