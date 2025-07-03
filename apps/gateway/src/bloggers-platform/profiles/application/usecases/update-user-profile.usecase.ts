import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProfilesRepository } from '../../infrastructure/profiles.repository';
import { UpdateProfileDto } from '../../dto/update-user-profile.dto';
import { UsersRepository } from '../../../../user-accounts/infrastructure/users.repository';
import { BadRequestDomainException } from '../../../../../../../libs/exceptions/domain-exceptions';

export class UpdateUserProfileCommand {
  constructor(
    public userId: number,
    public dto: UpdateProfileDto,
  ) {}
}

@CommandHandler(UpdateUserProfileCommand)
export class UpdateUserProfileUseCase
  implements ICommandHandler<UpdateUserProfileCommand>
{
  constructor(
    private usersRepository: UsersRepository,
    private profilesRepository: ProfilesRepository,
  ) {}

  async execute({ userId, dto }: UpdateUserProfileCommand): Promise<void> {
    const userWithTheSameUsername =
      await this.usersRepository.getUserByUsername(dto.username);

    if (userWithTheSameUsername) {
      throw BadRequestDomainException.create(
        'User with this username is already registered',
        'username',
      );
    }

    await this.profilesRepository.updateUserProfileByUserId(userId, dto);
  }
}
