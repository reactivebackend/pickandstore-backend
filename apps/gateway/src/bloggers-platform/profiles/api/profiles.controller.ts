import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { JwtBearerGuard } from '../../../user-accounts/guards/jwt-bearer.guard';
import { ExtractUserFromRequest } from '../../../user-accounts/guards/decorators/extract-user-id-from-request.decorator';
import { UpdateProfileInputDto } from './input-dto/update-profile.input-dto';
import { UpdateUserProfileCommand } from '../application/usecases/update-user-profile.usecase';
import { ProfileViewDto } from './view-dto/profile.view-dto';
import { ProfilesQueryRepository } from '../infrastructure/query/profiles.query-repository';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileAvatarViewDto } from './view-dto/profile-avatar.view-dto';
import { UploadUserProfileAvatarCommand } from '../application/usecases/upload-user-profile-avatar.usecase';
import { DeleteUserProfileAvatarCommand } from '../application/usecases/delete-user-profile-avatar.usecase';
import {
  DeleteUserProfileAvatarDocs,
  GetUserProfileDocs,
  UpdateUserProfileDocs,
  UploadUserProfileAvatarDocs,
} from '../docs/profiles.docs';

@Controller('users/profile')
export class ProfileController {
  constructor(
    private commandBus: CommandBus,
    private profilesQueryRepository: ProfilesQueryRepository,
  ) {}

  @UpdateUserProfileDocs()
  @UseGuards(JwtBearerGuard)
  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateUserProfile(
    @ExtractUserFromRequest() userId: number,
    @Body() updateProfileInputDto: UpdateProfileInputDto,
  ): Promise<void> {
    return this.commandBus.execute(
      new UpdateUserProfileCommand(userId, updateProfileInputDto),
    );
  }

  @GetUserProfileDocs()
  @UseGuards(JwtBearerGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  async getUserProfile(
    @ExtractUserFromRequest() userId: number,
  ): Promise<ProfileViewDto> {
    return this.profilesQueryRepository.getUserProfileByUserIdOrNotFoundFail(
      userId,
    );
  }

  @UploadUserProfileAvatarDocs()
  @UseGuards(JwtBearerGuard)
  @Post('avatar')
  @UseInterceptors(
    FileInterceptor('avatar', {
      limits: {
        fileSize: 10 * 1024 * 1024,
      },
    }),
  )
  @HttpCode(HttpStatus.CREATED)
  async uploadUserProfileAvatar(
    @ExtractUserFromRequest() userId: number,
    @UploadedFile() avatarFile: Express.Multer.File,
  ): Promise<ProfileAvatarViewDto> {
    const userAvatarId = await this.commandBus.execute(
      new UploadUserProfileAvatarCommand(userId, avatarFile),
    );
    return this.profilesQueryRepository.getUserProfileAvatarByIdOrNotFoundFail(
      userAvatarId,
    );
  }

  @DeleteUserProfileAvatarDocs()
  @UseGuards(JwtBearerGuard)
  @Delete('avatar')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserProfileAvatar(
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {
    await this.commandBus.execute(new DeleteUserProfileAvatarCommand(userId));
  }
  @UseGuards(JwtBearerGuard)
  @Get('subscriptions')
  async getSubscriptions(@ExtractUserFromRequest() userId: number) {
    return this.profilesQueryRepository.getCurrentSubscriptions(userId);
  }
}
