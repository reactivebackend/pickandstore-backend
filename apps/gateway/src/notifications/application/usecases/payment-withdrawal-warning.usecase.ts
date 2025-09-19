import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotificationsRepository } from '../../infrastructure/notifications.repository';
import { SocketNotificationsService } from '../socket-notifications.service';
import { Interval } from '@nestjs/schedule';
import { NotificationType } from '../../../../generated/prisma';

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
  async execute(): Promise<void> {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 1);

    const upcomingSubscriptions =
      await this.notificationsRepository.getSubscriptionsWithinHour(targetDate);

    for (const subscription of upcomingSubscriptions) {
      const notificationSent =
        await this.notificationsRepository.getNotificationByUserIdAndDate({
          userId: subscription.userId,
          notifyType: NotificationType.IN_ONE_DAY,
          targetDate: subscription.subscriptionEndDate,
        });

      if (!notificationSent || notificationSent.length === 0) {
        const message = 'Your next payment will be charged in 1 day';

        this.socketNotificationsService.sendNotification(
          subscription.userId,
          message,
        );

        await this.notificationsRepository.createNotification({
          userId: subscription.userId,
          message: message,
          notifyType: NotificationType.IN_ONE_DAY,
          targetDate: subscription.subscriptionEndDate,
        });
      }
    }
  }
}
