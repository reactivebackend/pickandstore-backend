import { NotificationType } from '../../../generated/prisma';

export class CreateNotificationDto {
  userId: number;
  message: string;
  notifyType: NotificationType;
  targetDate: string | Date;
}
