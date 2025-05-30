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
import { LocalStrategy } from './strategies/local.strategy';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh.strategy';
import { JwtBearerStrategy } from './strategies/jwt-bearer.strategy';
import { BasicStrategy } from './strategies/basic.strategy';
import { PassportModule } from '@nestjs/passport';
import { RefreshTokenUseCase } from './application/usecases/refresh-token.usecase';
import { CreateDeviceUseCase } from './application/usecases/devices/create-device.usecase';
import { UpdateDeviceDataUseCase } from './application/usecases/devices/update-device-data.usecase';
import { LogoutUserUseCase } from './application/usecases/logout-user.usecase';
import { JwtModule } from '@nestjs/jwt';
import { DevicesRepository } from './infrastructure/device.repository';
import { AuthConfig } from './config/auth.config';
import { JwtConfig } from './config/jwt.config';
import { AuthService } from './application/auth.service';
import { UsersQueryRepository } from './infrastructure/query/users.query-repository';
import { LoginUserUseCase } from './application/usecases/login-user.usecase';

const userUseCases = [
  CreateUserUseCase,
  RegisterUserUseCase,
  RegistrationConfirmationUseCase,
  RegistrationEmailResendingUseCase,
  RefreshTokenUseCase,
  CreateDeviceUseCase,
  LogoutUserUseCase,
  UpdateDeviceDataUseCase,
  LoginUserUseCase,
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
    AuthConfig,
    JwtConfig,
    UsersRepository,
    UsersQueryRepository,
    DevicesRepository,
    CryptoService,
    AuthService,
    ...userUseCases,
    ...strategies,
  ],
})
export class UserModule {}
