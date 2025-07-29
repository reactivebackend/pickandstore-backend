import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { AvailableSubscription } from '../../../../generated/prisma';

@Injectable()
export class SubscriptionRepository {
  constructor(private prismaService: PrismaService) {}

  async findSubscriptionByType(
    typeSubscription: 'MONTHLY' | 'DAY' | 'WEEKLY',
  ): Promise<AvailableSubscription> {
    const subscription =
      await this.prismaService.availableSubscription.findFirst({
        where: {
          typeSubscription: typeSubscription,
        },
      });
    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }
    return subscription;
  }
}
