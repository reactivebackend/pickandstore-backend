import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiProperty,
  ApiPayloadTooLargeResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { PostViewDto } from '../api/view-dto/post.view-dto';
import { CreatePostInputDto } from '../api/input-dto/create-post.input-dto';
import { APIErrorResult } from '../../../../../../libs/exceptions/dto/api-error-result.dto';
import { PaginatedViewDto } from '../../../../../../libs/dto/base.paginated.view-dto';

export function CreatePostDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create a new post with images.',
    }),
    ApiCreatedResponse({
      description: 'The post has been successfully created.',
      type: PostViewDto,
    }),
    ApiBadRequestResponse({
      description: `Bad Request:
- Returned with body of type APIErrorResult if image type is invalid or image not attached.
- Returned with no body if more than 10 images are attached.`,
      type: APIErrorResult,
    }),
    ApiPayloadTooLargeResponse({
      description: 'If the attached image is too large.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiConsumes('application/json'),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      description: 'Post data with images',
      type: PostInputDtoWithFiles,
    }),
    ApiBearerAuth('bearer'),
  );
}

export function GetPostByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Return post by id.' }),
    ApiOkResponse({
      description: 'The post has been successfully found.',
      type: PostViewDto,
    }),
    ApiNotFoundResponse({
      description: 'Not Found.',
    }),
  );
}

export function GetAllUserPostsDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Return all post by userId with pagination.' }),
    ApiOkResponse({
      description: 'Paginated list of posts',
      type: PaginatedPostsViewDto,
    }),
  );
}

export function UpdatePostByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update post by id.' }),
    ApiNoContentResponse({ description: 'Post updated successfully.' }),
    ApiBadRequestResponse({
      description: `Trying to update another user's post.`,
    }),
    ApiNotFoundResponse({
      description: 'Post not found.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBearerAuth('bearer'),
  );
}

export function DeletePostByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete post by id.' }),
    ApiNoContentResponse({ description: 'Post deleted successfully.' }),
    ApiBadRequestResponse({
      description: `Trying to delete another user's post.`,
    }),
    ApiNotFoundResponse({
      description: 'Post not found.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBearerAuth('bearer'),
  );
}

class PostInputDtoWithFiles extends CreatePostInputDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Array of image files to attach to the post (JPEG, JPG, PNG)',
    isArray: true,
  })
  images: any;
}

class PaginatedPostsViewDto extends PaginatedViewDto<PostViewDto[]> {
  @ApiProperty({ type: [PostViewDto] })
  items: PostViewDto[];
}
