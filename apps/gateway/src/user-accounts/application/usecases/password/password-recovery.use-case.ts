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

  async execute(command: PasswordRecoveryCommand): Promise<boolean | null> {
    const user = await this.usersRepository.getUserByEmail(
      command.emailInputDto.email,
    );

    if (!user) {
      return null;
    }

    const recoveryCode = randomUUID();
    const expirationDate = add(new Date(), { hours: 1 });
    await this.usersRepository.updateRecoveryDate({
      userId: user.id,
      recoveryCode,
      expirationDate,
    });

    await this.sendPasswordRecoveryMail(user.email, recoveryCode);
    return true;
  }

  private async sendPasswordRecoveryMail(
    email: string,
    confirmationCode: string,
  ): Promise<any> {
    try {
      await this.mailService.sendPasswordRecoveryEmail(email, confirmationCode);
    } catch (e) {
      console.error(e);
      console.log(e);
      return null;
    }
  }
}
