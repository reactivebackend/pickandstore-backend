import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  DeletionStatus,
  UserNotification,
  UserSubscription,
} from '../../../generated/prisma';
import { GetNotificationByIdAndDateDto } from '../dto/get-notification.dto';
import { UpdateNotificationsInputDto } from '../api/input-dto/update-notifications.input-dto';
@Injectable()
export class NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async createNotification(
    dto: CreateNotificationDto,
  ): Promise<UserNotification> {
    return this.prismaService.userNotification.create({
      data: {
        userId: dto.userId,
        message: dto.message,
        notifyType: dto.notifyType,
        targetDate: dto.targetDate,
      },
    });
  }

  async getNotificationByUserIdAndDate(
    dto: GetNotificationByIdAndDateDto,
  ): Promise<Array<UserNotification> | null> {
    return this.prismaService.userNotification.findMany({
      where: {
        userId: dto.userId,
        notifyType: dto.notifyType,
        targetDate: dto.targetDate,
      },
    });
  }

  async getSubscriptionsWithinHour(
    targetTime: Date,
  ): Promise<UserSubscription[]> {
    const startTime = new Date(targetTime);
    const endTime = new Date(targetTime);

    endTime.setHours(endTime.getHours() + 1);
    return this.prismaService.userSubscription.findMany({
      where: {
        autoRenewal: true,
        nextPaymentDate: {
          gte: startTime,
          lte: endTime,
        },
      },
    });
  }

  async getNotificationById(id: number): Promise<UserNotification | null> {
    return this.prismaService.userNotification.findUnique({
      where: {
        id: id,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });
  }

  async makeDeleted(id: number) {
    await this.prismaService.userNotification.update({
      where: {
        id: id,
      },
      data: {
        deletionStatus: DeletionStatus.Deleted,
      },
    });
  }

  async updateNotification(dto: UpdateNotificationsInputDto) {
    await this.prismaService.userNotification.updateMany({
      where: {
        id: {
          in: dto.ids,
        },
        deletionStatus: DeletionStatus.NotDeleted,
      },
      data: {
        isRead: true,
      },
    });
  }

  async getNotificationByIds(
    ids: Array<number>,
  ): Promise<UserNotification[] | null> {
    return this.prismaService.userNotification.findMany({
      where: {
        id: {
          in: ids,
        },
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });
  }
}
