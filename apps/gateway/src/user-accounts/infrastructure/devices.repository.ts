import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { DeletionStatus, Device } from '../../../generated/prisma';
import { CreateDeviceDto } from '../dto/create-device.dto';
import { UpdateDeviceDto } from '../dto/update-device.dto';

@Injectable()
export class DevicesRepository {
  constructor(private prismaService: PrismaService) {}

  async createDevice(dto: CreateDeviceDto): Promise<Device> {
    return this.prismaService.device.create({
      data: {
        ...dto,
      },
    });
  }

  async makeDeleted(deviceId: string): Promise<void> {
    await this.prismaService.device.update({
      where: {
        id: deviceId,
      },
      data: {
        deletionStatus: DeletionStatus.Deleted,
      },
    });
  }

  async getDeviceByIdOrNotFoundFail(deviceId: string): Promise<Device> {
    const device = await this.prismaService.device.findUnique({
      where: {
        id: deviceId,
      },
    });

    if (!device) {
      throw new NotFoundException('Device not found');
    }

    return device;
  }

  async getDeviceById(deviceId: string): Promise<Device | null> {
    return this.prismaService.device.findUnique({
      where: {
        id: deviceId,
      },
    });
  }

  async getAllOtherDevicesByUserId(
    userId: number,
    deviceId: string,
  ): Promise<Device[]> {
    return this.prismaService.device.findMany({
      where: {
        userId: userId,
        id: {
          not: deviceId,
        },
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });
  }

  async getDeviceByIdAndUserIdOrFails(
    userId: number,
    deviceId: string,
  ): Promise<Device> {
    const device = await this.prismaService.device.findUnique({
      where: {
        id: deviceId,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    if (!device) {
      throw new NotFoundException('Device not found');
    }

    if (userId !== device.userId) {
      throw new ForbiddenException("Trying to get another user's device");
    }

    return device;
  }

  async updateDeviceData(
    deviceId: string,
    dto: UpdateDeviceDto,
  ): Promise<Device | null> {
    return this.prismaService.device.update({
      where: {
        id: deviceId,
      },
      data: {
        lastActiveDate: dto.lastActiveDate,
        ip: dto.ip,
        title: dto.title,
      },
    });
  }
}
