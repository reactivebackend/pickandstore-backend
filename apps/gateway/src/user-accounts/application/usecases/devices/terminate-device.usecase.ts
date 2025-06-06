import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../../infrastructure/devices.repository';

export class TerminateDeviceCommand {
  constructor(
    public userId: number,
    public deviceId: string,
  ) {}
}

@CommandHandler(TerminateDeviceCommand)
export class TerminateDeviceUseCase
  implements ICommandHandler<TerminateDeviceCommand>
{
  constructor(private devicesRepository: DevicesRepository) {}

  async execute({ userId, deviceId }: TerminateDeviceCommand) {
    const device = await this.devicesRepository.getDeviceByIdAndUserIdOrFails(
      userId,
      deviceId,
    );

    await this.devicesRepository.makeDeleted(device.id);
  }
}
