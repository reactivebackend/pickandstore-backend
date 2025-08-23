import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../gateway/prisma/prisma.service';
import { Prisma, UserSubscription } from '../../../gateway/generated/prisma';

export type UserSubscriptionWithTransaction =
  Prisma.UserSubscriptionGetPayload<{
    include: { subscriptionTransactions: true };
  }>;

@Injectable()
export class UserSubscriptionRepository {
  constructor(private prismaService: PrismaService) {}

  async createUserSubscription(
    userId: number,
    subscriptionId: number,
    transactionId: number,
    subscriptionStartDate: Date,
    subscriptionEndDate: Date,
    nextPaymentDate: Date,
    isAutoRenew: boolean,
  ): Promise<UserSubscription> {
    return this.prismaService.userSubscription.create({
      data: {
        userId: userId,
        subscriptionId: subscriptionId,
        transactionId: transactionId,
        subscriptionStartDate: subscriptionStartDate,
        subscriptionEndDate: subscriptionEndDate,
        nextPaymentDate: nextPaymentDate,
        autoRenewal: isAutoRenew,
      },
    });
  }

  async getCurrentSubscriptionWithTransaction(
    userId: number,
  ): Promise<UserSubscriptionWithTransaction | null> {
    return this.prismaService.userSubscription.findFirst({
      where: {
        userId,
        subscriptionStartDate: { lte: new Date() },
        subscriptionEndDate: { gt: new Date() },
      },
      include: {
        subscriptionTransactions: true,
      },
      orderBy: {
        subscriptionStartDate: 'desc',
      },
    });
  }

  async getNextSubscriptionByUserId(
    userId: number,
  ): Promise<UserSubscription | null> {
    return this.prismaService.userSubscription.findFirst({
      where: {
        userId: userId,
        subscriptionStartDate: {
          gt: new Date(),
        },
        autoRenewal: true,
      },
      orderBy: {
        subscriptionStartDate: 'asc',
      },
    });
  }

  async cancelAutoRenewalById(userSubscriptionId: number): Promise<void> {
    await this.prismaService.userSubscription.update({
      where: {
        id: userSubscriptionId,
      },
      data: {
        autoRenewal: false,
        nextPaymentDate: null,
      },
    });
  }

  async updateSubscriptionDates(
    subscriptionId: number,
    subscriptionStartDate: Date,
    subscriptionEndDate: Date,
    nextPaymentDate: Date,
  ): Promise<void> {
    await this.prismaService.userSubscription.update({
      where: { id: subscriptionId },
      data: {
        subscriptionStartDate: subscriptionStartDate,
        subscriptionEndDate: subscriptionEndDate,
        nextPaymentDate: nextPaymentDate,
      },
    });
  }

  async enableAutoRenewalAndUpdateNextPaymentDateById(
    subscriptionId: number,
    nextPaymentDate: Date,
  ): Promise<void> {
    await this.prismaService.userSubscription.update({
      where: { id: subscriptionId },
      data: {
        nextPaymentDate: nextPaymentDate,
        autoRenewal: true,
      },
    });
  }

  async getLastQueuedSubscription(
    userId: number,
  ): Promise<UserSubscriptionWithTransaction | null> {
    return this.prismaService.userSubscription.findFirst({
      where: {
        userId,
        subscriptionEndDate: { gt: new Date() },
      },
      include: {
        subscriptionTransactions: true,
      },
      orderBy: {
        subscriptionStartDate: 'desc',
      },
    });
  }

  async getExpiredSubscriptions() {
    return this.prismaService.userSubscription.findMany({
      where: {
        subscriptionEndDate: { lt: new Date() },
        notified: false,
        user: {
          subscription: {
            none: {
              subscriptionEndDate: { gt: new Date() },
            },
          },
        },
      },
      orderBy: {
        subscriptionEndDate: 'asc',
      },
    });
  }

  async markAsNotified(ids: number[]): Promise<void> {
    await this.prismaService.userSubscription.updateMany({
      where: { id: { in: ids } },
      data: { notified: true },
    });
  }
}
