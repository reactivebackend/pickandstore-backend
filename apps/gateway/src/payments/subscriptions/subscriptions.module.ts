import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SubscriptionsController } from './api/subscriptions.controller';
import { BuySubscriptionUseCase } from './application/usecases/create-paymentStripe.usecase';
import { PaymentsRepository } from './infrastructure/payments-repository';
import { SubscriptionRepository } from './infrastructure/subscription-repository';
import { SubscriptionQueryRepository } from './infrastructure/query/subscription.query-repository';
import { PaymentsQueryRepository } from './infrastructure/query/payments.query-repository';
import { json } from 'express';

const subscriptionsUseCases = [BuySubscriptionUseCase];

@Module({
  imports: [CqrsModule],
  controllers: [SubscriptionsController],
  providers: [
    ...subscriptionsUseCases,
    PaymentsRepository,
    SubscriptionRepository,
    SubscriptionQueryRepository,
    PaymentsQueryRepository,
  ],
  exports: [],
})
export class SubscriptionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        json({
          verify: (req, res, buf) => {
            req['rawBody'] = buf;
          },
        }),
      )
      .forRoutes({
        path: 'stripe/notification-hook',
        method: RequestMethod.POST,
      });
  }
}
