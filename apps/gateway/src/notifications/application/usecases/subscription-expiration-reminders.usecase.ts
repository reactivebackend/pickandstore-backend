import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Interval } from '@nestjs/schedule';
import { UsersRepository } from '../../../user-accounts/infrastructure/users.repository';
import { SocketNotificationsService } from '../../../sockets/notificationsSocket/socket-notifications.service';
import { NotificationsRepository } from '../../infrastructure/notifications.repository';

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
  @Interval(200000)
  async execute(command: SubscriptionExpirationRemindersCommand): Promise<any> {
    const users = await this.usersRepository.getUsersWithSubscriptions();
    const today = new Date();
    for (const user of users) {
      const subscription = user.subscription[user.subscription.length - 1];
      console.log(user.subscription);
      if (!subscription) continue;

      const expiryDate = subscription.subscriptionEndDate;
      const diffTime = expiryDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(expiryDate);
      console.log(diffDays);
      let notifyType: string | null = null;
      let message: string | null = null;

      if (diffDays === 7) {
        notifyType = 'SEVEN_DAYS_BEFORE';
        message =
          'Ваша подписка заканчивается через 7 дней. Пожалуйста, продлите её.';
      } else if (diffDays === 1) {
        notifyType = 'ONE_DAYS_BEFORE';
        message =
          'Ваша подписка заканчивается через 1 день. Пожалуйста, продлите её.';
      }
      if (notifyType && message) {
        const notificationSent =
          await this.notificationsRepository.getNotificationByUserIdAndDate({
            userId: user.id,
            notifyType: notifyType as
              | 'SEVEN_DAYS_BEFORE'
              | 'ONE_DAYS_BEFORE'
              | 'IN_ONE_DAY'
              | 'SUBSCRIPTION_IS_ACTIVE',
            targetDate: expiryDate,
          });
        if (!notificationSent || notificationSent.length === 0) {
          await this.socketNotificationsService.sendSubscriptionExpiredNotification(
            String(user.id),
            message,
          );
          await this.notificationsRepository.createNotification({
            userId: user.id,
            notifyType: notifyType as
              | 'SEVEN_DAYS_BEFORE'
              | 'ONE_DAYS_BEFORE'
              | 'IN_ONE_DAY'
              | 'SUBSCRIPTION_IS_ACTIVE',
            targetDate: expiryDate,
          });
        }
      }
    }
  }
}
