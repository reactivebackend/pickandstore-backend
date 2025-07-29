import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { PrismaService } from '../../../../prisma/prisma.service';
import { SubscriptionTransactions } from '../../../../generated/prisma';

@Injectable()
export class PaymentsRepository {
  constructor(private prismaService: PrismaService) {}

  async createPayment(
    dto: CreatePaymentDto,
  ): Promise<SubscriptionTransactions> {
    return this.prismaService.subscriptionTransactions.create({
      data: {
        subscriptionId: dto.productIds,
        price: dto.price,
        paymentSystems: 'stripe',
        subscriptionType: dto.subscriptionType,
        url: dto.url,
        userId: dto.userId,
      },
    });
  }
  async updatePaymentUrl(paymentId: number, url: string | null): Promise<void> {
    await this.prismaService.subscriptionTransactions.update({
      where: {
        id: paymentId,
      },
      data: {
        url: url ? url : 'error',
      },
    });
  }
}
