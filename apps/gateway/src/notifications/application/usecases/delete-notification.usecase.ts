import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotificationsRepository } from '../../infrastructure/notifications.repository';
import { BadRequestDomainException } from '../../../../../../libs/exceptions/domain-exceptions';
import { ForbiddenException, NotFoundException } from '@nestjs/common';

export class DeleteNotificationCommand {
  constructor(
    public notificationId: number,
    public userId: number,
  ) {}
}

@CommandHandler(DeleteNotificationCommand)
export class DeletePostUseCase
  implements ICommandHandler<DeleteNotificationCommand>
{
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    notificationId,
    userId,
  }: DeleteNotificationCommand): Promise<void> {
    debugger;
    const findNotification =
      await this.notificationsRepository.findNotificationById(notificationId);
    if (!findNotification) {
      throw new NotFoundException('Notification not found');
    }
    if (findNotification.userId !== userId) {
      throw new ForbiddenException('You are not entitled to notice');
    }
    debugger;
    await this.notificationsRepository.deleteNotificationById(notificationId);
  }
}
