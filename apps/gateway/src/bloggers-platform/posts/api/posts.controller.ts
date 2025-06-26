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
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreatePostInputDto } from './input-dto/create-post.input-dto';
import { CreatePostCommand } from '../application/usecases/create-post.usecase';
import { JwtBearerGuard } from '../../../user-accounts/guards/jwt-bearer.guard';
import { ExtractUserFromRequest } from '../../../user-accounts/guards/decorators/extract-user-id-from-request.decorator';
import { PostViewDto } from './view-dto/post.view-dto';
import { UpdatePostCommand } from '../application/usecases/update-post.usecase';
import { PostsQueryRepository } from '../infrastructure/query/posts.query-repository';
import { DeletePostCommand } from '../application/usecases/delete-post.usecase';
import { GetPostsQueryParams } from './input-dto/get-posts-query-params';
import { PaginatedViewDto } from '../../../../../../libs/dto/base.paginated.view-dto';
import {
  CreatePostDocs,
  DeletePostByIdDocs,
  GetAllUserPostsDocs,
  GetPostByIdDocs,
  UpdatePostByIdDocs,
} from '../docs/posts.docs';
import { UpdatePostInputDto } from './input-dto/update-post.input-dto';

@Controller('posts')
export class PostController {
  constructor(
    private commandBus: CommandBus,
    private postsQueryRepository: PostsQueryRepository,
  ) {}

  @CreatePostDocs()
  @UseGuards(JwtBearerGuard)
  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      limits: {
        files: 10,
        fileSize: 20 * 1024 * 1024,
      },
    }),
  )
  async createPost(
    @ExtractUserFromRequest() userId: number,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() postInputDto: CreatePostInputDto,
  ): Promise<PostViewDto> {
    const postId = await this.commandBus.execute(
      new CreatePostCommand(files, userId, postInputDto.description),
    );
    return this.postsQueryRepository.getPostByIdOrNotFoundFail(postId);
  }

  @GetPostByIdDocs()
  @UseGuards(JwtBearerGuard)
  @Get(':id')
  async getPostById(@Param('id') id: number): Promise<PostViewDto> {
    return this.postsQueryRepository.getPostByIdOrNotFoundFail(id);
  }

  @GetAllUserPostsDocs()
  @UseGuards(JwtBearerGuard)
  @Get('user/:userId')
  async getAllUserPost(
    @Param('userId') userId: number,
    @Query() query: GetPostsQueryParams,
  ): Promise<PaginatedViewDto<PostViewDto[]>> {
    return this.postsQueryRepository.getAllUserPosts(query, userId);
  }

  @UpdatePostByIdDocs()
  @UseGuards(JwtBearerGuard)
  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePostById(
    @Param('id') id: number,
    @ExtractUserFromRequest() userId: number,
    @Body() postInputDto: UpdatePostInputDto,
  ): Promise<void> {
    return this.commandBus.execute(
      new UpdatePostCommand(id, userId, postInputDto.description),
    );
  }

  @DeletePostByIdDocs()
  @UseGuards(JwtBearerGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletePostById(
    @Param('id') id: number,
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {
    await this.commandBus.execute(new DeletePostCommand(id, userId));
  }
}
