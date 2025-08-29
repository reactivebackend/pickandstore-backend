import { SubscriptionPeriod } from '../../../gateway/generated/prisma';

export class CreateStripePaymentDto {
  userId: number;
  period: SubscriptionPeriod;
  baseUrl: string;
}
