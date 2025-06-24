import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PostInputDto } from './input-dto/post.input-dto';
import { CreatePostCommand } from '../application/usecases/create-post.usecase';
import { JwtBearerGuard } from '../../../user-accounts/guards/jwt-bearer.guard';
import { ExtractUserFromRequest } from '../../../user-accounts/guards/decorators/extract-user-id-from-request.decorator';
import { PostViewDto } from './view-dto/post.view-dto';
import { UpdatePostCommand } from '../application/usecases/update-post.usecase';
import { PostsQueryRepository } from '../infrastructure/query/posts.query-repository';
import { DeletePostCommand } from '../application/usecases/delete-post.usecase';

@Controller('posts')
export class PostController {
  constructor(
    private commandBus: CommandBus,
    private postsQueryRepository: PostsQueryRepository,
  ) {}

  @UseGuards(JwtBearerGuard)
  @Post()
  @UseInterceptors(FilesInterceptor('image', 10))
  async createPost(
    @ExtractUserFromRequest() userId: number,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() postInputDto: PostInputDto,
  ): Promise<PostViewDto> {
    const postId = await this.commandBus.execute(
      new CreatePostCommand(files, userId, postInputDto.description),
    );
    return this.postsQueryRepository.getPostByIdOrNotFoundFail(postId);
  }

  @Get(':id')
  async getPostById(@Param('id') id: number): Promise<PostViewDto> {
    return this.postsQueryRepository.getPostByIdOrNotFoundFail(id);
  }

  @UseGuards(JwtBearerGuard)
  @Put(':id')
  async updatePostById(
    @Param('id') id: number,
    @ExtractUserFromRequest() userId: number,
    @Body() postInputDto: PostInputDto,
  ): Promise<PostViewDto> {
    const postId = await this.commandBus.execute(
      new UpdatePostCommand(id, userId, postInputDto.description),
    );
    return this.postsQueryRepository.getPostByIdOrNotFoundFail(postId);
  }

  @UseGuards(JwtBearerGuard)
  @Delete(':id')
  async deletePostById(
    @Param('id') id: number,
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {
    await this.commandBus.execute(new DeletePostCommand(id, userId));
  }
}
