import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../../infrastructure/users.repository';
import { DevicesRepository } from '../../infrastructure/device.repository';

export class ValidateRefreshTokenCommand {
  constructor(public payload: any) {}
}

@CommandHandler(ValidateRefreshTokenCommand)
export class ValidateRefreshTokenUseCase
  implements ICommandHandler<ValidateRefreshTokenCommand>
{
  constructor(private readonly devicesRepository: DevicesRepository) {}

  async execute(command: ValidateRefreshTokenCommand) {
    const device = await this.devicesRepository.findDevice(
      command.payload.deviceId,
    );
    if (!device || command.payload.iat < device.lastActiveDate) {
      return null;
    }

    return device;
  }
}
