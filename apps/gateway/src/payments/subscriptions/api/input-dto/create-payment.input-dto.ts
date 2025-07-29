import { IsEnum, IsNumber, IsString } from 'class-validator';

enum typeSubscriptionEnum {
  MONTHLY = 'MONTHLY',
  DAY = 'DAY',
  WEEKLY = 'WEEKLY',
}
enum paymentTypeEnum {
  STRIPE = 'STRIPE',
  PAYPAL = 'PAYPAL',
  CREDIT_CARD = 'CREDIT_CARD',
}

export class CreatePaymentInputDto {
  @IsEnum(typeSubscriptionEnum)
  typeSubscription: 'MONTHLY' | 'DAY' | 'WEEKLY';
  @IsEnum(paymentTypeEnum)
  paymentType: string;
  @IsNumber()
  amount: number;
  @IsString()
  baseUrl: string;
}
