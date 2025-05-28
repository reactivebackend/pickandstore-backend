import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthController } from './api/auth.controller';
import { CreateUserUseCase } from './application/usecases/create-user.usecase';
import { RegisterUserUseCase } from './application/usecases/register-user.usecase';
import { CryptoService } from './application/crypto.service';
import { UsersRepository } from './infrastructure/users.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { EmailModule } from '../notifications/email.module';
import { RegistrationConfirmationUseCase } from './application/usecases/registration-confirmation.usecase';
import { RegistrationEmailResendingUseCase } from './application/usecases/registration-email-resending.usecase';

const useUseCases = [
  CreateUserUseCase,
  RegisterUserUseCase,
  RegistrationConfirmationUseCase,
  RegistrationEmailResendingUseCase,
];

@Global()
@Module({
  imports: [CqrsModule, PrismaModule, EmailModule],
  controllers: [AuthController],
  providers: [UsersRepository, CryptoService, ...useUseCases],
})
export class UserModule {}
