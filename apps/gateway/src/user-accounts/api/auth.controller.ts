import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { IncomingHttpHeaders } from 'http';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserInputDto, EmailInputDto } from './input-dto/users.input-dto';
import { RegisterUserCommand } from '../application/usecases/register-user.usecase';
import { ConfirmationCodeInputDto } from './input-dto/confirmation-code.input-dto';
import { RegistrationConfirmationCommand } from '../application/usecases/registration-confirmation.usecase';
import { RegistrationEmailResendingCommand } from '../application/usecases/registration-email-resending.usecase';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { ExtractUserFromRequest } from '../guards/decorators/extract-user-id-from-request.decorator';
import { RefreshTokenCommand } from '../application/usecases/refresh-token.usecase';
import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';
import { LogoutUserCommand } from '../application/usecases/logout-user.usecase';
import { JwtBearerGuard } from '../guards/jwt-bearer.guard';
import { UsersQueryRepository } from '../infrastructure/query/users.query-repository';
import { ExtractRefreshTokenFromCookie } from '../guards/decorators/extract-refresh-token-from-cookie.decorator';
import { ExtractDeviceFromCookie } from '../guards/decorators/extract-device-from-cookie.decorator';
import { LoginUserCommand } from '../application/usecases/login-user.usecase';

@Controller('auth')
export class AuthController {
  constructor(
    private commandBus: CommandBus,
    private usersQueryRepository: UsersQueryRepository,
  ) {}

  @Post('registration')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registration(@Body() body: CreateUserInputDto): Promise<void> {
    return this.commandBus.execute(new RegisterUserCommand(body));
  }

  @Post('registration-confirmation')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registrationConfirmation(
    @Body() body: ConfirmationCodeInputDto,
  ): Promise<void> {
    return this.commandBus.execute(
      new RegistrationConfirmationCommand(body.code),
    );
  }

  @Post('registration-email-resending')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registrationEmailResending(@Body() body: EmailInputDto): Promise<void> {
    return this.commandBus.execute(
      new RegistrationEmailResendingCommand(body.email),
    );
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @ExtractUserFromRequest() userId: string,
    @Ip() ip: string,
    @Headers() headers: IncomingHttpHeaders,
    @Res() res: Response,
  ) {
    const userAgent = headers['user-agent'] || 'unknown';

    const { accessToken, refreshToken } = await this.commandBus.execute(
      new LoginUserCommand(userId, userAgent, ip),
    );

    res
      .cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
      })
      .json({ accessToken: accessToken });
  }

  @UseGuards(JwtRefreshGuard)
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logout(@ExtractDeviceFromCookie() deviceId: string): Promise<void> {
    return this.commandBus.execute(new LogoutUserCommand(deviceId));
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(
    @ExtractUserFromRequest() userId: string,
    @ExtractRefreshTokenFromCookie() refreshToken: string,
    @ExtractDeviceFromCookie() deviceId: string,
    @Ip() ip: string,
    @Headers() headers: IncomingHttpHeaders,
    @Res() res: Response,
  ) {
    const userAgent = headers['user-agent'] || 'unknown';

    const { newAccessToken, newRefreshToken } = await this.commandBus.execute(
      new RefreshTokenCommand(userId, deviceId, ip, userAgent),
    );

    res
      .cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: true,
      })
      .json({ accessToken: newAccessToken });
  }

  @UseGuards(JwtBearerGuard)
  @Get('me')
  async getUserProfile(@ExtractUserFromRequest() userId: string) {
    return this.usersQueryRepository.getUserProfile(userId);
  }
}
