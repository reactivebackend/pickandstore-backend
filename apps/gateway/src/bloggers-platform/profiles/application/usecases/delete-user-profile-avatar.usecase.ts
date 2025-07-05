import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProfilesRepository } from '../../infrastructure/profiles.repository';

export class DeleteUserProfileAvatarCommand {
  constructor(public userId: number) {}
}

@CommandHandler(DeleteUserProfileAvatarCommand)
export class DeleteUserProfileAvatarUseCase
  implements ICommandHandler<DeleteUserProfileAvatarCommand>
{
  constructor(private profilesRepository: ProfilesRepository) {}

  async execute({ userId }: DeleteUserProfileAvatarCommand): Promise<void> {
    const userAvatar =
      await this.profilesRepository.getUserAvatarByUserIdOrNotFoundFail(userId);

    if (userAvatar) {
      await this.profilesRepository.makeUserAvatarDeleted(userAvatar.id);
    }
  }
}
