import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './input-dto/create-post.input-dto';
import { CreatePostCommand } from '../application/usecases/posts/create-post.usecase';
import { JwtBearerGuard } from '../guards/jwt-bearer.guard';
import { ExtractUserFromRequest } from '../guards/decorators/extract-user-id-from-request.decorator';
import { AppService } from '../../app.service';

@Controller('posts')
export class PostController {
  constructor(
    private commandBus: CommandBus,
    private readonly appService: AppService,
  ) {}
  @Post()
  @UseGuards(JwtBearerGuard)
  @UseInterceptors(FilesInterceptor('image', 10))
  async createPost(
    @ExtractUserFromRequest() userId: number,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() createPostDto: CreatePostDto,
  ): Promise<number> {
    let imageUrl: Array<string> = [];
    if (files) {
      imageUrl = await this.appService.sendPhoto(files);
    }
    return this.commandBus.execute(
      new CreatePostCommand({
        imageUrl,
        content: createPostDto.content,
        title: createPostDto.title,
        userId,
      }),
    );
  }
}
