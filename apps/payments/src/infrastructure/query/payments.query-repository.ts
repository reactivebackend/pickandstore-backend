import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../gateway/prisma/prisma.service';
import { MyPaymentsViewDto } from '../../../../gateway/src/subcsriptions/api/view-dto/my-payments.view-dto';
import { PaymentStatus } from '../../../../gateway/generated/prisma';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class PaymentsQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getMyPaymentsOrNotFoundFail(
    userId: number,
  ): Promise<MyPaymentsViewDto[]> {
    const payments = await this.prismaService.subscriptionTransactions.findMany(
      {
        where: {
          userId: userId,
          status: PaymentStatus.Confirmed,
        },
        orderBy: {
          paymentDate: 'desc',
        },
        include: {
          availableSubscription: true,
        },
      },
    );

    if (!payments.length) {
      throw new RpcException({
        status: HttpStatus.NOT_FOUND,
        message: 'Payments not found',
        field: 'payments',
      });
    }

    // Собираем уникальные externalTransactionId
    const externalIds = payments
      .map((p) => p.externalTransactionId)
      .filter((id): id is string => !!id);

    // Забираем все userSubscriptions, у которых транзакция имеет один из этих externalTransactionId
    const userSubscriptions =
      await this.prismaService.userSubscription.findMany({
        where: {
          subscriptionTransactions: {
            externalTransactionId: { in: externalIds },
          },
        },
        include: {
          subscriptionTransactions: true,
        },
      });

    // Маппим транзакции и подставляем userSubscription
    return payments.map((payment) => {
      const userSubscription = userSubscriptions.find(
        (us) =>
          us.subscriptionTransactions.externalTransactionId ===
          payment.externalTransactionId,
      );

      return MyPaymentsViewDto.mapToView({
        ...payment,
        userSubscription: userSubscription ?? null,
      });
    });
  }
}
