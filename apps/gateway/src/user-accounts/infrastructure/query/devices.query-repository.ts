import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { DeviceViewDto } from '../../api/view-dto/devices.view-dto';
import { DeletionStatus } from '../../../../generated/prisma';

@Injectable()
export class DevicesQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getAllDevices(userId: number): Promise<DeviceViewDto[]> {
    const devices = await this.prismaService.device.findMany({
      where: {
        userId: userId,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    return devices.map((device) => DeviceViewDto.mapToView(device));
  }
}
