import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../../infrastructure/devices.repository';

export class TerminateAllOtherDevicesCommand {
  constructor(
    public userId: number,
    public deviceId: string,
  ) {}
}

@CommandHandler(TerminateAllOtherDevicesCommand)
export class TerminateAllOtherDevicesUseCase
  implements ICommandHandler<TerminateAllOtherDevicesCommand>
{
  constructor(private devicesRepository: DevicesRepository) {}

  async execute({
    userId,
    deviceId,
  }: TerminateAllOtherDevicesCommand): Promise<void> {
    const devices = await this.devicesRepository.getAllOtherDevicesByUserId(
      userId,
      deviceId,
    );

    for (const device of devices) {
      await this.devicesRepository.makeDeleted(device.id);
    }
  }
}
