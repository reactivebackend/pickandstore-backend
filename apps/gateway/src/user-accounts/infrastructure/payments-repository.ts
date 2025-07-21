import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  PaymentsTransactions,
  SubscriptionPayments,
} from '../../../generated/prisma';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { add } from 'date-fns/index';

@Injectable()
export class PaymentsRepository {
  constructor(private prismaService: PrismaService) {}

  async createPayment(dto: CreatePaymentDto): Promise<PaymentsTransactions> {
    return this.prismaService.paymentsTransactions.create({
      data: {
        paymentSystems: 'stripe',
        createAt: new Date(),
        productIds: dto.productIds,
        price: dto.price,
        url: dto.url,
        userId: dto.userId,
        updateAt: new Date(),
      },
    });
  }
  async updatePaymentUrl(paymentId: number, url: string): Promise<void> {
    await this.prismaService.paymentsTransactions.update({
      where: {
        id: paymentId,
      },
      data: {
        url: url,
      },
    });
  }
}
