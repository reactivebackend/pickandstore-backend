import { SubscriptionPeriod } from '../../../gateway/generated/prisma';

export function calculateDate(
  startDate: Date,
  period: SubscriptionPeriod,
): Date {
  const endDate = new Date(startDate);

  if (period === SubscriptionPeriod.MONTH) {
    endDate.setMonth(endDate.getMonth() + 1);
  } else if (period === SubscriptionPeriod.WEEK) {
    endDate.setDate(endDate.getDate() + 7);
  } else if (period === SubscriptionPeriod.DAY) {
    endDate.setDate(endDate.getDate() + 1);
  }

  return endDate;
}
