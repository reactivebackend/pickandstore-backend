import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  Response,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserInputDto, EmailInputDto } from './input-dto/users.input-dto';
import { RegisterUserCommand } from '../application/usecases/register-user.usecase';
import { ConfirmationCodeInputDto } from './input-dto/confirmation-code.input-dto';
import { RegistrationConfirmationCommand } from '../application/usecases/registration-confirmation.usecase';
import { RegistrationEmailResendingCommand } from '../application/usecases/registration-email-resending.usecase';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { UserIdFromGuard } from '../decorators/user-id-from-guard.decorator';
import { TokensCreateCommand } from '../application/usecases/tokens-create.use-case';
import { DeviceCreateForLoginCommand } from '../application/usecases/devices/device-create-for-login.use-case';
import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';
import { RefreshToken } from '../decorators/refresh-token.decorator';
import { JwtService } from '@nestjs/jwt';
import { DeviceDeleteForLogoutCommand } from '../application/usecases/devices/device-delete-for-logout.use-case';
import { DeviceUpdateForTokensCommand } from '../application/usecases/devices/device-update-for-tokens.use-case';
import { JwtBearerGuard } from '../guards/jwt-bearer.guard';
import { UsersRepository } from '../infrastructure/users.repository';

@Controller('auth')
export class AuthController {
  constructor(
    private commandBus: CommandBus,
    private readonly jwtService: JwtService,
    private usersRepository: UsersRepository,
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
  @HttpCode(200)
  async login(
    @UserIdFromGuard() userId: string,
    @Ip() ip: string,
    @Headers() headers: any,
    @Response() res: any,
  ) {
    const userAgent = headers['user-agent'] || 'unknown';
    const tokens = await this.commandBus.execute(
      new TokensCreateCommand(userId),
    );
    await this.commandBus.execute(
      new DeviceCreateForLoginCommand(tokens.refreshToken, ip, userAgent),
    );
    res
      .cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: true,
      })
      .json({ accessToken: tokens.accessToken });
  }

  @UseGuards(JwtRefreshGuard)
  @Post('logout')
  @HttpCode(204)
  async logout(@RefreshToken() refreshToken: any) {
    const decodedToken: any = this.jwtService.decode(refreshToken);
    const deviceId = decodedToken.deviceId;
    return this.commandBus.execute(new DeviceDeleteForLogoutCommand(deviceId));
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh-token')
  @HttpCode(200)
  async refreshTokens(
    @UserIdFromGuard() userId: string,
    @Ip() ip: string,
    @Headers() headers: any,
    @RefreshToken() refreshToken: any,
    @Response() res: any,
  ) {
    const userAgent = headers['user-agent'] || 'unknown';
    const decodedToken: any = this.jwtService.decode(refreshToken);
    const deviceId = decodedToken.deviceId;

    const tokens = await this.commandBus.execute(
      new TokensCreateCommand(userId, deviceId),
    );

    const newToken = this.jwtService.decode(tokens.refreshToken);

    await this.commandBus.execute(
      new DeviceUpdateForTokensCommand(newToken, ip, userAgent),
    );

    res
      .cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: true,
      })
      .json({ accessToken: tokens.accessToken });
  }

  @UseGuards(JwtBearerGuard)
  @Get('me')
  async getProfile(@UserIdFromGuard() userId: string) {
    const user = await this.usersRepository.getUserByIdOrNotFoundFail(userId);

    return {
      email: user.email,
      login: user.username,
      userId: userId.toString(),
    };
  }
}
