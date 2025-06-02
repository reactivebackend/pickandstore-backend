import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NewPasswordInputDto } from '../../../api/input-dto/new-password.input.dto';
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
    private usersRepository: UsersRepository,
    private cryptoService: CryptoService,
  ) {}

  async execute({ newPasswordDto }: PasswordUpdateCommand): Promise<void> {
    const userMeta =
      await this.usersRepository.getUserMetadataByPasswordRecoveryCode(
        newPasswordDto.recoveryCode,
      );

    if (!userMeta || userMeta.passwordRecoveryExpiration! < new Date()) {
      throw BadRequestDomainException.create(
        'Recovery code expired',
        'recoveryCode',
      );
    }

    const passwordHash = await this.cryptoService.createPasswordHash(
      newPasswordDto.newPassword,
    );
    await this.usersRepository.updatePasswordHash(
      userMeta.userId,
      passwordHash,
    );
  }
}
