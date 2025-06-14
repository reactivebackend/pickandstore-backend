import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DevicesRepository } from '../../../infrastructure/devices.repository';
import { CreateDeviceDto } from '../../../dto/create-device.dto';
import { AuthService } from '../../auth.service';

export class CreateDeviceCommand {
  constructor(
    public refreshToken: string,
    public ip: string,
    public userAgent: string,
  ) {}
}

@CommandHandler(CreateDeviceCommand)
export class CreateDeviceUseCase
  implements ICommandHandler<CreateDeviceCommand>
{
  constructor(
    private authService: AuthService,
    private deviceRepository: DevicesRepository,
  ) {}

  async execute({
    refreshToken,
    ip,
    userAgent,
  }: CreateDeviceCommand): Promise<any> {
    try {
      const tokenData = this.authService.getRefreshTokenData(refreshToken);

      const deviceData: CreateDeviceDto = {
        id: tokenData.deviceId,
        ip: ip,
        title: userAgent,
        lastActiveDate: tokenData.issuedAt,
        expirationDate: tokenData.expiresAt,
        userId: +tokenData.sub,
      };

      return this.deviceRepository.createDevice(deviceData);
    } catch (error) {
      console.error('Error in CreateDeviceUseCase:', error);
      throw error;
    }
  }
}
