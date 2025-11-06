import { NotificationType } from '../../../generated/prisma';

export class GetNotificationByIdAndDateDto {
  userId: number;
  notifyType: NotificationType;
  targetDate: string | Date;
}
