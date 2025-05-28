import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../../infrastructure/device.repository';

export class DeviceDeleteForLogoutCommand {
  constructor(public deviceId: string) {}
}

@CommandHandler(DeviceDeleteForLogoutCommand)
export class DeviceDeleteForLogoutUseCase
  implements ICommandHandler<DeviceDeleteForLogoutCommand>
{
  constructor(private readonly devicesRepository: DevicesRepository) {}

  async execute(command: DeviceDeleteForLogoutCommand): Promise<any> {
    return this.devicesRepository.deleteDevice(command.deviceId);
  }
}
