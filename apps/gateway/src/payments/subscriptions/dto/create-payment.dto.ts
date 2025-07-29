export class CreatePaymentDto {
  productIds: number;
  price: number;
  description: string;
  url: string;
  userId: number;
  subscriptionType: 'MONTHLY' | 'DAY' | 'WEEKLY';
}
