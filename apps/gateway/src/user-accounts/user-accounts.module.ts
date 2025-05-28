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
import { ValidateLoginAndPasswordUseCase } from './application/usecases/validate-login-pass.use-case';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh.strategy';
import { JwtBearerStrategy } from './strategies/jwt-bearer.strategy';
import { BasicStrategy } from './strategies/basic.strategy';
import { PassportModule } from '@nestjs/passport';
import { TokensCreateUseCase } from './application/usecases/tokens-create.use-case';
import { DeviceCreateForLoginUseCase } from './application/usecases/devices/device-create-for-login.use-case';
import {
  DeviceUpdateForTokensCommand,
  DeviceUpdateForTokensUseCase,
} from './application/usecases/devices/device-update-for-tokens.use-case';
import { DeviceDeleteForLogoutUseCase } from './application/usecases/devices/device-delete-for-logout.use-case';
import { JwtModule } from '@nestjs/jwt';
import { DevicesRepository } from './infrastructure/device.repository';
import { ValidateRefreshTokenUseCase } from './application/usecases/validate-refresh-token.use-case';

const useUseCases = [
  CreateUserUseCase,
  RegisterUserUseCase,
  RegistrationConfirmationUseCase,
  RegistrationEmailResendingUseCase,
  ValidateLoginAndPasswordUseCase,
  TokensCreateUseCase,
  DeviceCreateForLoginUseCase,
  DeviceUpdateForTokensCommand,
  DeviceDeleteForLogoutUseCase,
  ValidateRefreshTokenUseCase,
  DeviceUpdateForTokensUseCase,
];

const strategies = [
  BasicStrategy,
  JwtBearerStrategy,
  JwtRefreshTokenStrategy,
  LocalStrategy,
];

@Global()
@Module({
  imports: [CqrsModule, PrismaModule, EmailModule, PassportModule, JwtModule],
  controllers: [AuthController],
  providers: [
    UsersRepository,
    DevicesRepository,
    CryptoService,
    ...useUseCases,
    ...strategies,
  ],
})
export class UserModule {}
