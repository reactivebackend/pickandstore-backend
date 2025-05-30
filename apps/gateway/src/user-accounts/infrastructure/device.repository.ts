import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Device } from '../../../generated/prisma';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';

@Injectable()
export class DevicesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createDevice(dto: CreateDeviceDto): Promise<Device> {
    return this.prismaService.device.create({
      data: {
        ...dto,
      },
    });
  }

  async deleteDevice(deviceId: string): Promise<void> {
    await this.prismaService.device.delete({
      where: {
        deviceId: deviceId,
      },
    });
  }

  async getDeviceByIdOrNotFoundFail(deviceId: string): Promise<Device> {
    const device = await this.prismaService.device.findUnique({
      where: {
        deviceId: deviceId,
      },
    });

    if (!device) {
      throw new NotFoundException('Device not found');
    }

    return device;
  }

  async updateDeviceData(
    deviceId: string,
    dto: UpdateDeviceDto,
  ): Promise<Device | null> {
    return this.prismaService.device.update({
      where: {
        deviceId: deviceId,
      },
      data: {
        lastActiveDate: dto.lastActiveDate,
        ip: dto.ip,
        title: dto.title,
      },
    });
  }
}
