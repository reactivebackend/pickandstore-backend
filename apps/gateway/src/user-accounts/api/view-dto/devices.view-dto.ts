import { Device } from '../../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

export class DeviceViewDto {
  @ApiProperty({
    description: 'IP address of device during signing in',
  })
  ip: string;

  @ApiProperty({
    description:
      'Device name: for example Chrome 105 (received by parsing http header "user-agent")',
  })
  deviceName: string;

  @ApiProperty({
    description: 'Date of the last generating of refresh/access tokens',
  })
  lastVisit: Date;

  @ApiProperty({
    description: 'Id of connected device session',
  })
  deviceId: string;

  static mapToView(device: Device): DeviceViewDto {
    const dto = new DeviceViewDto();

    dto.ip = device.ip;
    dto.deviceName = device.title;
    dto.lastVisit = device.lastActiveDate;
    dto.deviceId = device.id;

    return dto;
  }
}
