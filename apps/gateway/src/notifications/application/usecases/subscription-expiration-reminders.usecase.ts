import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Interval } from '@nestjs/schedule';
import { UsersRepository } from '../../../user-accounts/infrastructure/users.repository';
import { SocketNotificationsService } from '../socket-notifications.service';
import { NotificationsRepository } from '../../infrastructure/notifications.repository';
import { NotificationType } from '../../../../generated/prisma';

export class SubscriptionExpirationRemindersCommand {}

@CommandHandler(SubscriptionExpirationRemindersCommand)
export class SubscriptionExpirationRemindersUseCase
  implements ICommandHandler<SubscriptionExpirationRemindersCommand>
{
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
    private readonly usersRepository: UsersRepository,
    private readonly socketNotificationsService: SocketNotificationsService,
  ) {}

  @Interval(20 * 1000)
  async execute(): Promise<any> {
    const users = await this.usersRepository.getUsersWithSubscriptions();
    const now = new Date();
    const twoMinutes = 2 * 60 * 1000;

    for (const user of users) {
      const subscription = user.subscription[user.subscription.length - 1];
      if (!subscription) continue;

      const expiryDate = subscription.subscriptionEndDate;

      const sevenDaysBefore = new Date(
        expiryDate.getTime() - 7 * 24 * 60 * 60 * 1000,
      );
      const oneDayBefore = new Date(
        expiryDate.getTime() - 1 * 24 * 60 * 60 * 1000,
      );

      let notifyType: NotificationType | null = null;
      let message: string | null = null;

      if (
        now.getTime() >= sevenDaysBefore.getTime() - twoMinutes &&
        now.getTime() <= sevenDaysBefore.getTime() + twoMinutes
      ) {
        notifyType = NotificationType.SEVEN_DAYS_BEFORE;
        message = 'Your subscription expires in 7 days';
      } else if (
        now.getTime() >= oneDayBefore.getTime() - twoMinutes &&
        now.getTime() <= oneDayBefore.getTime() + twoMinutes
      ) {
        notifyType = NotificationType.ONE_DAYS_BEFORE;
        message = 'Your subscription expires in 1 day';
      }

      if (notifyType && message) {
        const notificationSent =
          await this.notificationsRepository.getNotificationByUserIdAndDate({
            userId: user.id,
            notifyType: notifyType,
            targetDate: expiryDate,
          });

        if (!notificationSent || notificationSent.length === 0) {
          this.socketNotificationsService.sendNotification(user.id, message);
          await this.notificationsRepository.createNotification({
            userId: user.id,
            message: message,
            notifyType: notifyType,
            targetDate: expiryDate,
          });
        }
      }
    }
  }
}
