import { Injectable, NotFoundException } from '@nestjs/common';
import { AvailableSubscriptionViewDtoViewDto } from '../../api/view-dto/availableSubscriptions.view-dto';
import { CurrentSubscriptionsViewDto } from '../../api/view-dto/current-subscription.view-dto';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { MyPaymentsViewDtoViewDto } from '../../api/view-dto/myPayments.view-dto';

@Injectable()
export class PaymentsQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getMyPayments(userId: number): Promise<MyPaymentsViewDtoViewDto[]> {
    const payments = await this.prismaService.subscriptionTransactions.findMany(
      {
        where: {
          userId: userId,
        },
      },
    );

    return payments.map((payment) =>
      MyPaymentsViewDtoViewDto.mapToView(payment),
    );
  }
}
