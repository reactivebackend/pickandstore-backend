export class CreateStripePaymentDto {
  userId: number;
  typeSubscription: 'MONTHLY' | 'DAY' | 'WEEKLY';
  amount: number;
  baseUrl: string;
}
