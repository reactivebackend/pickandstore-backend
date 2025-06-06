import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../../infrastructure/devices.repository';
import { AuthService } from '../../auth.service';
import { Device } from '../../../../../generated/prisma';

export class UpdateDeviceDataCommand {
  constructor(
    public refreshToken: string,
    public ip: string,
    public userAgent: string,
  ) {}
}

@CommandHandler(UpdateDeviceDataCommand)
export class UpdateDeviceDataUseCase
  implements ICommandHandler<UpdateDeviceDataCommand>
{
  constructor(
    private devicesRepository: DevicesRepository,
    private authService: AuthService,
  ) {}

  async execute({
    refreshToken,
    ip,
    userAgent,
  }: UpdateDeviceDataCommand): Promise<Device | null> {
    const tokenData = this.authService.getRefreshTokenData(refreshToken);

    await this.devicesRepository.getDeviceByIdOrNotFoundFail(
      tokenData.deviceId,
    );

    return this.devicesRepository.updateDeviceData(tokenData.deviceId, {
      title: userAgent,
      ip: ip,
      lastActiveDate: tokenData.issuedAt,
    });
  }
}
