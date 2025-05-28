import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../../infrastructure/device.repository';

export class DeviceUpdateForTokensCommand {
  constructor(
    public token: any,
    public ip: string,
    public userAgent: string,
  ) {}
}

@CommandHandler(DeviceUpdateForTokensCommand)
export class DeviceUpdateForTokensUseCase
  implements ICommandHandler<DeviceUpdateForTokensCommand>
{
  constructor(private readonly devicesRepository: DevicesRepository) {}

  async execute(command: DeviceUpdateForTokensCommand): Promise<any | null> {
    const device = await this.devicesRepository.findDevice(
      command.token.deviceId,
    );

    if (!device) {
      return null;
    }
    return this.devicesRepository.updateDeviceData(command.token.deviceId, {
      title: command.userAgent,
      ip: command.ip,
      lastActiveDate: command.token.iat,
    });
  }
}
