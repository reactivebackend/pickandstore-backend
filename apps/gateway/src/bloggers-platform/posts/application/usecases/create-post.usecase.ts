import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostDto } from '../../dto/create-post.dto';
import { PostsRepository } from '../../infrastructure/posts.repository';
import { AppService } from '../../../../app.service';
import { BadRequestDomainException } from '../../../../../../../libs/exceptions/domain-exceptions';

export class CreatePostCommand {
  constructor(
    public files: Express.Multer.File[],
    public userId: number,
    public description: string | undefined,
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
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (!files || files.length === 0) {
      throw BadRequestDomainException.create(
        'At least one image is required',
        'images',
      );
    }

    for (const file of files) {
      if (!allowedTypes.includes(file.mimetype)) {
        throw BadRequestDomainException.create(
          `Invalid file type for ${file.originalname}. Only JPEG and PNG are allowed`,
          'images',
        );
      }
    }

    const imageUrl = await this.appService.sendPhoto(files);

    const postData: CreatePostDto = {
      userId: userId,
      description: description || '',
      imageUrl: imageUrl,
    };

    const post = await this.postsRepository.createPost(postData);
    return post.id;
  }
}
