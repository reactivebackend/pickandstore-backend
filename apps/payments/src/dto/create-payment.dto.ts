import {
  PaymentStatus,
  PaymentSystem,
} from '../../../gateway/generated/prisma';

export class CreatePaymentDto {
  subscriptionId: number;
  userId: number;
  paymentSystem: PaymentSystem;
  externalTransactionId?: string;
  paymentDate?: Date;
  status?: PaymentStatus;
}
