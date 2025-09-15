import { UpdateNotificationsInputDto } from '../../api/input-dto/update-notifications.input-dto';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NotificationsRepository } from '../../infrastructure/notifications.repository';
import { ForbiddenException, NotFoundException } from '@nestjs/common';

export class UpdateNotificationsCommand {
  constructor(
    public userId: number,
    public dto: UpdateNotificationsInputDto,
  ) {}
}

@CommandHandler(UpdateNotificationsCommand)
export class UpdateUserProfileUseCase
  implements ICommandHandler<UpdateNotificationsCommand>
{
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({ userId, dto }: UpdateNotificationsCommand): Promise<void> {
    debugger;
    const notifications =
      await this.notificationsRepository.findNotificationByIds(dto.ids);
    debugger;
    if (!notifications || notifications.length === 0) {
      throw new NotFoundException('Notification not found');
    }

    for (const notification of notifications) {
      debugger;
      if (notification.userId !== userId) {
        throw new ForbiddenException('You are not entitled to notice');
      }
    }

    await this.notificationsRepository.updateNotification(dto);
  }
}
