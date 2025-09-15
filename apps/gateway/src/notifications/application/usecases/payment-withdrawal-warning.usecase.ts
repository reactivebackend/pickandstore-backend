import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotificationsRepository } from '../../infrastructure/notifications.repository';
import { UsersRepository } from '../../../user-accounts/infrastructure/users.repository';
import { SocketNotificationsService } from '../../../sockets/notificationsSocket/socket-notifications.service';
import { Interval } from '@nestjs/schedule';

export class PaymentWithdrawalWarningCommand {}

@CommandHandler(PaymentWithdrawalWarningCommand)
export class PaymentWithdrawalWarningUseCase
  implements ICommandHandler<PaymentWithdrawalWarningCommand>
{
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
    private readonly socketNotificationsService: SocketNotificationsService,
  ) {}
  @Interval(20000)
  async execute(command: PaymentWithdrawalWarningCommand): Promise<any> {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 1);
    const upcomingSubscriptions =
      await this.notificationsRepository.findSubscriptionsWithinHour(
        targetDate,
      );
    for (const subscription of upcomingSubscriptions) {
      const notificationSent =
        await this.notificationsRepository.getNotificationByUserIdAndDate({
          userId: subscription.userId,
          notifyType: 'IN_ONE_DAY',
          targetDate: subscription.subscriptionEndDate,
        });
      if (!notificationSent || notificationSent.length === 0) {
        await this.socketNotificationsService.sendSubscriptionExpiredNotification(
          String(subscription.userId),
          'Следующий платеж у вас спишется через 1 день',
        );
        await this.notificationsRepository.createNotification({
          userId: subscription.userId,
          notifyType: 'IN_ONE_DAY',
          targetDate: subscription.subscriptionEndDate,
        });
      }
    }
  }
}
