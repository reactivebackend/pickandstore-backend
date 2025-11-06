import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetNotificationsQueryParams } from '../../api/input-dto/get-notifications-query-params';
import { NotificationsPaginatedViewDto } from '../../api/view-dto/notifications.paginated.view-dto';
import { NotificationViewDto } from '../../api/view-dto/notification.view-dto';

@Injectable()
export class NotificationsQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getUserNotifications(
    query: GetNotificationsQueryParams,
    userId: number,
  ): Promise<NotificationsPaginatedViewDto<NotificationViewDto[]>> {
    const [notifications, totalCount, notReadCount] =
      await this.prismaService.$transaction([
        this.prismaService.userNotification.findMany({
          where: {
            userId: userId,
          },
          orderBy: { [query.sortBy]: query.sortDirection },
          skip: query.cursor ?? 0,
          take: query.pageSize,
        }),
        this.prismaService.userNotification.count({
          where: {
            userId: userId,
          },
        }),
        this.prismaService.userNotification.count({
          where: {
            userId: userId,
            isRead: false,
          },
        }),
      ]);

    const items = notifications.map((notification) =>
      NotificationViewDto.mapToView(notification),
    );

    return NotificationsPaginatedViewDto.NotificationsMapToView({
      items,
      totalCount,
      notReadCount,
      size: query.pageSize,
    });
  }
}
