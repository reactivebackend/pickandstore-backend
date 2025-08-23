import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SubscriptionRepository } from '../../../payments/src/infrastructure/subscription-repository';
import { UserSubscriptionRepository } from '../../../payments/src/infrastructure/user-subsciption.repository';
import { SubscriptionsController } from './api/subscriptions.controller';
import { SubscriptionQueryRepository } from '../../../payments/src/infrastructure/query/subscription.query-repository';
import { UserSubscriptionQueryRepository } from '../../../payments/src/infrastructure/query/user-subscription.query-repository';
import { PaymentsQueryRepository } from '../../../payments/src/infrastructure/query/payments.query-repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { configModule } from '../../../../libs/config/config.module';
import { CoreConfig } from '../../../../libs/config/core.config';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { UpdateUserSubscriptionStatusUseCase } from './application/usecases/update-user-subscription-status.usecase';
import { UsersRepository } from '../user-accounts/infrastructure/users.repository';

const subscriptionsUseCases = [UpdateUserSubscriptionStatusUseCase];

@Module({
  imports: [
    CqrsModule,
    ClientsModule.registerAsync([
      {
        name: 'PAYMENTS_SERVICE',
        imports: [configModule],
        inject: [CoreConfig],
        useFactory: (coreConfig: CoreConfig) => ({
          transport: Transport.TCP,
          options: {
            host: coreConfig.paymentsHost,
            port: coreConfig.paymentsTcpPort,
          },
        }),
      },
    ]),
    RabbitMQModule.forRootAsync({
      imports: [configModule],
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
        connectionInitOptions: { wait: false },
        enableControllerDiscovery: true,
      }),
    }),
  ],
  controllers: [SubscriptionsController],
  providers: [
    PaymentsQueryRepository,
    SubscriptionRepository,
    SubscriptionQueryRepository,
    UserSubscriptionRepository,
    UserSubscriptionQueryRepository,
    UsersRepository,
    ...subscriptionsUseCases,
  ],
  exports: [],
})
export class SubscriptionsModule {}
