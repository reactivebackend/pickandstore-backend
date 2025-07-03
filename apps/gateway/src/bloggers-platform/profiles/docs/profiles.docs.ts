import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiPayloadTooLargeResponse,
  ApiProperty,
  ApiNotFoundResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { UpdateProfileInputDto } from '../api/input-dto/update-profile.input-dto';
import { ProfileViewDto } from '../api/view-dto/profile.view-dto';
import { ProfileAvatarViewDto } from '../api/view-dto/profile-avatar.view-dto';
import { APIErrorResult } from '../../../../../../libs/exceptions/dto/api-error-result.dto';

export function UpdateUserProfileDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Update current user profile data.' }),
    ApiNoContentResponse({
      description: 'Profile updated successfully.',
    }),
    ApiBadRequestResponse({
      description: 'Validation failed.',
      type: APIErrorResult,
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBody({ type: UpdateProfileInputDto }),
    ApiBearerAuth('bearer'),
  );
}

export function GetUserProfileDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Get current user profile data.' }),
    ApiOkResponse({
      description: 'Returns profile view model.',
      type: ProfileViewDto,
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBearerAuth('bearer'),
  );
}

export function UploadUserProfileAvatarDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Upload new profile avatar.' }),
    ApiCreatedResponse({
      description: 'Avatar uploaded successfully.',
      type: ProfileAvatarViewDto,
    }),
    ApiBadRequestResponse({
      description: 'Invalid file format or no file attached.',
      type: APIErrorResult,
    }),
    ApiPayloadTooLargeResponse({
      description: 'If the attached image is too large.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBearerAuth('bearer'),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      type: AvatarUploadDto,
    }),
  );
}

export function DeleteUserProfileAvatarDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete current user profile avatar.' }),
    ApiNoContentResponse({
      description: 'Avatar deleted successfully.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiNotFoundResponse({
      description: 'Avatar not found.',
    }),
    ApiBearerAuth('bearer'),
  );
}

class AvatarUploadDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Avatar image file (max 10MB, JPG/PNG)',
  })
  avatar: any;
}
