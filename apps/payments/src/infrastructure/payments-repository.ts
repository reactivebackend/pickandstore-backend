import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { PrismaService } from '../../../gateway/prisma/prisma.service';
import {
  PaymentStatus,
  Prisma,
  SubscriptionTransactions,
  UserSubscription,
} from '../../../gateway/generated/prisma';

export type PaymentWithSubscription =
  Prisma.SubscriptionTransactionsGetPayload<{
    include: { availableSubscription: true };
  }>;

@Injectable()
export class PaymentsRepository {
  constructor(private prismaService: PrismaService) {}

  async createPayment(
    dto: CreatePaymentDto,
  ): Promise<SubscriptionTransactions> {
    return this.prismaService.subscriptionTransactions.create({
      data: {
        userId: dto.userId,
        subscriptionId: dto.subscriptionId,
        paymentSystem: dto.paymentSystem,
        externalTransactionId: dto.externalTransactionId,
        paymentDate: dto.paymentDate,
        status: dto.status,
      },
    });
  }

  async updatePaymentUrl(paymentId: number, url: string): Promise<void> {
    await this.prismaService.subscriptionTransactions.update({
      where: {
        id: paymentId,
      },
      data: {
        url: url,
      },
    });
  }

  async updateTransactionData(
    paymentId: number,
    paymentDate: Date,
    status: PaymentStatus,
    externalTransactionId: string,
  ): Promise<void> {
    await this.prismaService.subscriptionTransactions.update({
      where: {
        id: paymentId,
      },
      data: {
        status: status,
        paymentDate: paymentDate,
        externalTransactionId: externalTransactionId,
      },
    });
  }

  async getUserSubscriptionByExternalTransactionId(
    externalTransactionId: string,
  ): Promise<UserSubscription | null> {
    const subscriptionTransaction =
      await this.prismaService.subscriptionTransactions.findFirst({
        where: {
          externalTransactionId: externalTransactionId,
        },
        include: {
          userSubscription: true,
        },
      });

    if (!subscriptionTransaction || !subscriptionTransaction.userSubscription) {
      return null;
    }

    return subscriptionTransaction.userSubscription;
  }

  async getLastPaymentWithSubscriptionByExternalTransactionId(
    externalTransactionId: string,
  ): Promise<PaymentWithSubscription | null> {
    return this.prismaService.subscriptionTransactions.findFirst({
      where: {
        externalTransactionId: externalTransactionId,
        status: PaymentStatus.Confirmed,
      },
      orderBy: {
        paymentDate: 'desc',
      },
      include: {
        availableSubscription: true,
      },
    });
  }
}
