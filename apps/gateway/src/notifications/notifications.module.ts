import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationsController } from './api/notifications.controller';
import { SocketNotificationsService } from './application/socket-notifications.service';
import { JwtService } from '@nestjs/jwt';
import { JwtConfig } from '../user-accounts/config/jwt.config';
import { SubscriptionExpirationRemindersUseCase } from './application/usecases/subscription-expiration-reminders.usecase';
import { UsersRepository } from '../user-accounts/infrastructure/users.repository';
import { NotificationsRepository } from './infrastructure/notifications.repository';
import { PaymentWithdrawalWarningUseCase } from './application/usecases/payment-withdrawal-warning.usecase';
import { DeletePostUseCase } from './application/usecases/delete-notification.usecase';
import { UpdateUserProfileUseCase } from './application/usecases/update-notifications.usecase';
import { JwtWsStrategy } from '../user-accounts/strategies/jwt.ws.strategy';
import { NotificationsQueryRepository } from './infrastructure/query/notifications.query-repository';

const notificationsUseCases = [
  SubscriptionExpirationRemindersUseCase,
  PaymentWithdrawalWarningUseCase,
  DeletePostUseCase,
  UpdateUserProfileUseCase,
];

@Module({
  imports: [CqrsModule],
  controllers: [NotificationsController],
  providers: [
    ...notificationsUseCases,
    SocketNotificationsService,
    JwtService,
    JwtConfig,
    JwtWsStrategy,
    UsersRepository,
    NotificationsRepository,
    NotificationsQueryRepository,
    SocketNotificationsService,
  ],
  exports: [],
})
export class NotificationsModule {}
