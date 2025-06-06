import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../../infrastructure/users.repository';
import { BadRequestDomainException } from '../../../../../../libs/exceptions/domain-exceptions';

export class RegistrationConfirmationCommand {
  constructor(public code: string) {}
}

@CommandHandler(RegistrationConfirmationCommand)
export class RegistrationConfirmationUseCase
  implements ICommandHandler<RegistrationConfirmationCommand>
{
  constructor(private usersRepository: UsersRepository) {}

  async execute({ code }: RegistrationConfirmationCommand): Promise<void> {
    const user = await this.usersRepository.getUserByConfirmationCode(code);

    const metadata = user?.userMetadata;

    if (!user || !metadata || metadata.emailConfirmationCode !== code) {
      throw BadRequestDomainException.create(
        'Confirmation code incorrect',
        'code',
      );
    }

    if (metadata.isEmailConfirmed) {
      throw BadRequestDomainException.create(
        'The account has already been confirmed',
        'code',
      );
    }

    if (metadata.emailConfirmationExpiration! < new Date()) {
      throw BadRequestDomainException.create(
        'Verification code expired',
        'code',
      );
    }

    await this.usersRepository.updateEmailConfirmationStatus(user.id);
  }
}
