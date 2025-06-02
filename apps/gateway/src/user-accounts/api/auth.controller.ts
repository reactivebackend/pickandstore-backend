import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
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
import { AuthGuard } from '@nestjs/passport';
import { PasswordRecoveryCommand } from '../application/usecases/password/password-recovery.usecase';
import { NewPasswordInputDto } from './input-dto/new-password.input.dto';
import { PasswordUpdateCommand } from '../application/usecases/password/password-update.usecase';
import { MeViewDto } from './view-dto/users.view-dto';

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
  ): Promise<void> {
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
  ): Promise<void> {
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
  async getUserProfile(
    @ExtractUserFromRequest() userId: string,
  ): Promise<MeViewDto> {
    return this.usersQueryRepository.getUserProfile(userId);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(
    @Req() req: Request,
    @Ip() ip: string,
    @Headers() headers: IncomingHttpHeaders,
    @Res() res: Response,
  ) {
    const userAgent = headers['user-agent'] || 'unknown';
    const userId = (req.user as { id: number }).id.toString();

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

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth() {}

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthRedirect(
    @Req() req: Request,
    @Ip() ip: string,
    @Headers() headers: IncomingHttpHeaders,
    @Res() res: Response,
  ) {
    const userAgent = headers['user-agent'] || 'unknown';
    const userId = (req.user as { id: number }).id.toString();

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

  @Post('password-recovery')
  @HttpCode(HttpStatus.NO_CONTENT)
  async recoverPassword(@Body() emailInputDto: EmailInputDto): Promise<void> {
    return this.commandBus.execute(new PasswordRecoveryCommand(emailInputDto));
  }

  @Post('new-password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePassword(
    @Body() newPasswordDto: NewPasswordInputDto,
  ): Promise<void> {
    return await this.commandBus.execute(
      new PasswordUpdateCommand(newPasswordDto),
    );
  }
}
