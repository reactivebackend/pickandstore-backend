export class GetNotificationByIdAndDateDto {
  userId: number;
  notifyType:
    | 'SEVEN_DAYS_BEFORE'
    | 'ONE_DAYS_BEFORE'
    | 'IN_ONE_DAY'
    | 'SUBSCRIPTION_IS_ACTIVE';
  targetDate: string | Date;
}
