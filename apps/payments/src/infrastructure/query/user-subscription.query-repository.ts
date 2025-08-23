import { HttpStatus, Injectable } from '@nestjs/common';
import { UserSubscriptionViewDto } from '../../../../gateway/src/subcsriptions/api/view-dto/user-subscription-view.dto';
import { PrismaService } from '../../../../gateway/prisma/prisma.service';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UserSubscriptionQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getSubscriptionsOrNotFoundFail(
    userId: number,
  ): Promise<UserSubscriptionViewDto[]> {
    const subscriptions = await this.prismaService.userSubscription.findMany({
      where: {
        userId,
        subscriptionEndDate: { gt: new Date() },
      },
      orderBy: {
        subscriptionStartDate: 'asc',
      },
      include: {
        availableSubscription: {
          select: {
            period: true,
          },
        },
      },
    });

    if (!subscriptions.length) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'Subscriptions not found',
        field: 'subscriptions',
      });
    }

    return subscriptions.map((subscription) =>
      UserSubscriptionViewDto.mapToView(subscription),
    );
  }
}
