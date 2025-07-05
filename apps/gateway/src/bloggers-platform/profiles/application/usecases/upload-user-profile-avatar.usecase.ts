import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppService } from '../../../../app.service';
import { ProfilesRepository } from '../../infrastructure/profiles.repository';
import { BadRequestDomainException } from '../../../../../../../libs/exceptions/domain-exceptions';

export class UploadUserProfileAvatarCommand {
  constructor(
    public userId: number,
    public avatarFile: Express.Multer.File,
  ) {}
}

@CommandHandler(UploadUserProfileAvatarCommand)
export class UploadUserProfileAvatarUseCase
  implements ICommandHandler<UploadUserProfileAvatarCommand>
{
  constructor(
    private appService: AppService,
    private profilesRepository: ProfilesRepository,
  ) {}

  async execute({
    userId,
    avatarFile,
  }: UploadUserProfileAvatarCommand): Promise<number> {
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (!avatarFile) {
      throw BadRequestDomainException.create('Image is required', 'avatar');
    }

    if (!allowedTypes.includes(avatarFile.mimetype)) {
      throw BadRequestDomainException.create(
        `Invalid file type for ${avatarFile.originalname}. Only JPEG and PNG are allowed`,
        'avatar',
      );
    }

    const currentUserAvatar =
      await this.profilesRepository.getUserAvatarByUserId(userId);

    if (currentUserAvatar) {
      await this.profilesRepository.makeUserAvatarDeleted(currentUserAvatar.id);
    }

    const avatarUrl = await this.appService.sendAvatar(avatarFile);
    const newUserAvatar =
      await this.profilesRepository.uploadUserProfileAvatarByUserId(
        userId,
        avatarUrl,
      );

    return newUserAvatar.id;
  }
}
