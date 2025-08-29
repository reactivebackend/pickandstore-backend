import { Injectable } from '@nestjs/common';
import { AvailableSubscriptionViewDto } from '../../../../gateway/src/subcsriptions/api/view-dto/available-subscriptions.view-dto';
import { PrismaService } from '../../../../gateway/prisma/prisma.service';

@Injectable()
export class SubscriptionQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getAvailableSubscriptions(): Promise<AvailableSubscriptionViewDto[]> {
    const subscriptions =
      await this.prismaService.availableSubscription.findMany();

    return subscriptions.map((subscription) =>
      AvailableSubscriptionViewDto.mapToView(subscription),
    );
  }
}
