import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { add } from 'date-fns';
import { EmailInputDto } from '../../../api/input-dto/users.input-dto';
import { UsersRepository } from '../../../infrastructure/users.repository';
import { EmailService } from '../../../../notifications/email.service';

export class PasswordRecoveryCommand {
  constructor(public emailInputDto: EmailInputDto) {}
}

@CommandHandler(PasswordRecoveryCommand)
export class PasswordRecoveryUseCase
  implements ICommandHandler<PasswordRecoveryCommand>
{
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly mailService: EmailService,
  ) {}

  async execute({ emailInputDto }: PasswordRecoveryCommand): Promise<void> {
    const user = await this.usersRepository.getUserByEmail(emailInputDto.email);

    if (!user) {
      return;
    }

    const recoveryCode = randomUUID();
    const expirationDate = add(new Date(), { hours: 1 });

    await this.usersRepository.updateRecoveryDate({
      userId: user.id,
      recoveryCode,
      expirationDate,
    });

    this.mailService.sendPasswordRecoveryEmail(user.email, recoveryCode);
  }
}
