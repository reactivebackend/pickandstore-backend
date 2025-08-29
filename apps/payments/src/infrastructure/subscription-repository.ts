import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../gateway/prisma/prisma.service';
import {
  AvailableSubscription,
  SubscriptionPeriod,
} from '../../../gateway/generated/prisma';

@Injectable()
export class SubscriptionRepository {
  constructor(private prismaService: PrismaService) {}

  async getSubscriptionByPeriod(
    period: SubscriptionPeriod,
  ): Promise<AvailableSubscription | null> {
    return this.prismaService.availableSubscription.findFirst({
      where: {
        period: period,
      },
    });
  }

  async getSubscriptionById(id: number): Promise<AvailableSubscription | null> {
    return this.prismaService.availableSubscription.findUnique({
      where: {
        id: id,
      },
    });
  }
}
