import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { DevicesRepository } from '../../../infrastructure/device.repository';
import { CreateDeviceDto } from '../../../dto/create-device.dto';

export class DeviceCreateForLoginCommand {
  constructor(
    public token: string,
    public ip: string,
    public userAgent: string,
  ) {}
}

@CommandHandler(DeviceCreateForLoginCommand)
export class DeviceCreateForLoginUseCase
  implements ICommandHandler<DeviceCreateForLoginCommand>
{
  constructor(
    private readonly jwtService: JwtService,
    private deviceRepository: DevicesRepository,
  ) {}

  async execute(command: DeviceCreateForLoginCommand): Promise<any> {
    const decodedToken: any = this.jwtService.decode(command.token);
    const deviceData: CreateDeviceDto = {
      deviceId: decodedToken.deviceId,
      ip: command.ip,
      title: command.userAgent,
      lastActiveDate: decodedToken.iat,
      expirationDate: decodedToken.exp,
      userId: decodedToken.sub,
    };

    return this.deviceRepository.createDevice(deviceData);
  }
}
