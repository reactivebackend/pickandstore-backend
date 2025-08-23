import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { UserSubscriptionRepository } from '../../infrastructure/user-subsciption.repository';

export class CheckExpiredSubscriptionsCommand {
  constructor() {}
}

@CommandHandler(CheckExpiredSubscriptionsCommand)
export class CheckExpiredSubscriptionsUseCase
  implements ICommandHandler<CheckExpiredSubscriptionsCommand>
{
  constructor(
    private userSubscriptionRepository: UserSubscriptionRepository,
    private amqpConnection: AmqpConnection,
  ) {}

  async execute() {
    // Достаём все подписки, которые истекли и ещё не уведомлялись
    const expiredSubscriptions =
      await this.userSubscriptionRepository.getExpiredSubscriptions();

    // Группируем по userId
    const subscriptionsByUser = new Map<
      number,
      (typeof expiredSubscriptions)[0][]
    >();

    for (const sub of expiredSubscriptions) {
      if (!subscriptionsByUser.has(sub.userId)) {
        subscriptionsByUser.set(sub.userId, []);
      }
      subscriptionsByUser.get(sub.userId)!.push(sub);
    }

    // Отправляем одно уведомление на пользователя
    for (const [userId, userSubs] of subscriptionsByUser.entries()) {
      await this.amqpConnection.publish(
        'subscriptions_exchange',
        'subscription_status_changed',
        {
          userId,
          hasActiveSubscription: false,
        },
      );

      // Помечаем все подписки пользователя как уведомлённые
      const ids = userSubs.map((s) => s.id);
      await this.userSubscriptionRepository.markAsNotified(ids);
    }
  }
}
