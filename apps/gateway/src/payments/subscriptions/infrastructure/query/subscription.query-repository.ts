import { Injectable, NotFoundException } from '@nestjs/common';
import { AvailableSubscriptionViewDtoViewDto } from '../../api/view-dto/availableSubscriptions.view-dto';
import { CurrentSubscriptionsViewDto } from '../../api/view-dto/current-subscription.view-dto';
import { PrismaService } from '../../../../../prisma/prisma.service';

@Injectable()
export class SubscriptionQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getAvailableSubscription(): Promise<
    AvailableSubscriptionViewDtoViewDto[]
  > {
    const subscriptions =
      await this.prismaService.availableSubscription.findMany();

    return subscriptions.map((subscription) =>
      AvailableSubscriptionViewDtoViewDto.mapToView(subscription),
    );
  }
  async getCurrentSubscriptions(
    userId: number,
  ): Promise<CurrentSubscriptionsViewDto> {
    const subscriptions = await this.prismaService.userSubscription.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!subscriptions) {
      throw new NotFoundException('Subscriptions not found');
    }

    return CurrentSubscriptionsViewDto.mapToView(subscriptions);
  }
}
