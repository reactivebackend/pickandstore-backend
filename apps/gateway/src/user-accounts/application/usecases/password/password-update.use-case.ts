import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NewPasswordInputDto } from '../../../dto/new-password.input.dto';
import { UsersRepository } from '../../../infrastructure/users.repository';
import { BadRequestDomainException } from '../../../../../../../libs/exceptions/domain-exceptions';
import { CryptoService } from '../../crypto.service';

export class PasswordUpdateCommand {
  constructor(public newPasswordDto: NewPasswordInputDto) {}
}

@CommandHandler(PasswordUpdateCommand)
export class PasswordUpdateUseCase
  implements ICommandHandler<PasswordUpdateCommand>
{
  constructor(
    protected readonly usersRepository: UsersRepository,
    private cryptoService: CryptoService,
  ) {}

  async execute(command: PasswordUpdateCommand): Promise<void> {
    const userMeta = await this.usersRepository.findUserForPasswordUpdate(
      command.newPasswordDto.recoveryCode,
    );

    if (!userMeta || userMeta.passwordRecoveryExpiration! < new Date()) {
      throw BadRequestDomainException.create('The code has expired');
    }
    const passwordHash = await this.cryptoService.createPasswordHash(
      command.newPasswordDto.newPassword,
    );
    await this.usersRepository.updatePasswordHash(
      userMeta.userId,
      passwordHash,
    );
  }
}
