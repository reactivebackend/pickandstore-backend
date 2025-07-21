import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { SubscriptionPayments } from '../../../generated/prisma';

@Injectable()
export class SubscriptionRepository {
  constructor(private prismaService: PrismaService) {}

  async findSubscriptionById(id: number): Promise<SubscriptionPayments> {
    const subscription =
      await this.prismaService.subscriptionPayments.findUnique({
        where: {
          id: id,
        },
      });
    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }
    return subscription;
  }
}
