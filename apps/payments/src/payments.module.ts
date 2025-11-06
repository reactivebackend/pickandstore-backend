import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { configModule } from '../../../libs/config/config.module';
import { CoreConfig } from '../../../libs/config/core.config';
import { ScheduleModule } from '@nestjs/schedule';
import { CreateStripePaymentUseCase } from './application/usecases/create-stripe-payment.usecase';
import { FinishStripePaymentUseCase } from './application/usecases/finish-stripe-payment.usecase';
import { StripeConfig } from './config/stripe.config';
import { PaymentsRepository } from './infrastructure/payments-repository';
import { SubscriptionRepository } from './infrastructure/subscription-repository';
import { UserSubscriptionRepository } from './infrastructure/user-subsciption.repository';
import { PrismaModule } from '../../gateway/prisma/prisma.module';
import { PaymentsSubscriptionsController } from './api/payments-subscriptions.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { CoreModule } from '../../../libs/config/core.module';
import { EnableStripeAutoRenewalUseCase } from './application/usecases/enable-stripe-auto-renewal.usecase';
import { DisableStripeAutoRenewalUseCase } from './application/usecases/disable-stripe-auto-renewal.usecase';
import { SubscriptionQueryRepository } from './infrastructure/query/subscription.query-repository';
import { UserSubscriptionQueryRepository } from './infrastructure/query/user-subscription.query-repository';
import { PaymentsQueryRepository } from './infrastructure/query/payments.query-repository';
import { CheckExpiredSubscriptionsUseCase } from './application/usecases/check-expired-subscriptions.usecase';
import { NotificationsRepository } from '../../gateway/src/notifications/infrastructure/notifications.repository';
import { SocketNotificationsService } from '../../gateway/src/notifications/application/socket-notifications.service';
import { JwtConfig } from '../../gateway/src/user-accounts/config/jwt.config';
import { JwtService } from '@nestjs/jwt';

const subscriptionsUseCases = [
  CreateStripePaymentUseCase,
  FinishStripePaymentUseCase,
  EnableStripeAutoRenewalUseCase,
  DisableStripeAutoRenewalUseCase,
  CheckExpiredSubscriptionsUseCase,
];

@Module({
  imports: [
    CqrsModule,
    PrismaModule,
    configModule,
    ScheduleModule.forRoot(),
    RabbitMQModule.forRootAsync({
      imports: [configModule, CoreModule],
      inject: [CoreConfig],
      useFactory: (coreConfig: CoreConfig) => ({
        exchanges: [
          {
            name: 'subscriptions_exchange',
            type: 'direct',
            durable: true,
          },
        ],
        uri: coreConfig.rabbitMqUrl,
        enableControllerDiscovery: true,
      }),
    }),
  ],
  controllers: [PaymentsController, PaymentsSubscriptionsController],
  providers: [
    PaymentsService,
    CoreConfig,
    StripeConfig,
    PaymentsRepository,
    PaymentsQueryRepository,
    SubscriptionRepository,
    SubscriptionQueryRepository,
    UserSubscriptionRepository,
    UserSubscriptionQueryRepository,
    ...subscriptionsUseCases,
    NotificationsRepository,
    SocketNotificationsService,
    JwtConfig,
    JwtService,
  ],
})
export class PaymentsModule {}
