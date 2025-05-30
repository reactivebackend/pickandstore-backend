import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../infrastructure/device.repository';

export class LogoutUserCommand {
  constructor(public deviceId: string) {}
}

@CommandHandler(LogoutUserCommand)
export class LogoutUserUseCase implements ICommandHandler<LogoutUserCommand> {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  async execute({ deviceId }: LogoutUserCommand): Promise<any> {
    return this.devicesRepository.deleteDevice(deviceId);
  }
}
