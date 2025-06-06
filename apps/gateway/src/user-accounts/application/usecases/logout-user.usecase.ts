import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../infrastructure/devices.repository';

export class LogoutUserCommand {
  constructor(public deviceId: string) {}
}

@CommandHandler(LogoutUserCommand)
export class LogoutUserUseCase implements ICommandHandler<LogoutUserCommand> {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  async execute({ deviceId }: LogoutUserCommand): Promise<void> {
    await this.devicesRepository.makeDeleted(deviceId);
  }
}
