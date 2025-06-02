import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { EmailService } from '../../../notifications/email.service';
import { UsersRepository } from '../../infrastructure/users.repository';
import { BadRequestDomainException } from '../../../../../../libs/exceptions/domain-exceptions';

export class RegistrationEmailResendingCommand {
  constructor(public email: string) {}
}

@CommandHandler(RegistrationEmailResendingCommand)
export class RegistrationEmailResendingUseCase
  implements ICommandHandler<RegistrationEmailResendingCommand>
{
  constructor(
    private usersRepository: UsersRepository,
    private emailService: EmailService,
  ) {}

  async execute({ email }: RegistrationEmailResendingCommand): Promise<void> {
    const user = await this.usersRepository.getUserWithMetadataByEmail(email);

    const metadata = user?.userMetadata;

    if (!user || !metadata) {
      throw BadRequestDomainException.create(
        'The user does not exist',
        'email',
      );
    }

    if (metadata.isEmailConfirmed) {
      throw BadRequestDomainException.create(
        'Email is already confirmed',
        'email',
      );
    }

    const confirmCode = randomUUID().toString();

    await this.usersRepository.updateEmailConfirmationData(
      user.id.toString(),
      confirmCode,
    );

    this.emailService.sendConfirmationEmail(user.email, confirmCode);
  }
}
