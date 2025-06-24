import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostDto } from '../../dto/create-post.dto';
import { PostsRepository } from '../../infrastructure/posts.repository';
import { AppService } from '../../../../app.service';

export class CreatePostCommand {
  constructor(
    public files: Express.Multer.File[],
    public userId: number,
    public description: string,
  ) {}
}

@CommandHandler(CreatePostCommand)
export class CreatePostUseCase implements ICommandHandler<CreatePostCommand> {
  constructor(
    private appService: AppService,
    private postsRepository: PostsRepository,
  ) {}

  async execute({
    files,
    userId,
    description,
  }: CreatePostCommand): Promise<number> {
    let imageUrl: Array<string> = [];
    if (files) {
      imageUrl = await this.appService.sendPhoto(files);
    }

    const postData: CreatePostDto = {
      userId: userId,
      description: description,
      imageUrl: imageUrl,
    };

    const post = await this.postsRepository.createPost(postData);
    return post.id;
  }
}
