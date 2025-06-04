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
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCookieAuth,
  ApiFoundResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { APIErrorResult } from '../../../../../libs/exceptions/dto/api-error-result.dto';
import { LoginUserInputDto } from './input-dto/login-user.input-dto';
import { AccessTokenViewDto } from './view-dto/access-token.view-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private commandBus: CommandBus,
    private usersQueryRepository: UsersQueryRepository,
  ) {}

  @ApiOperation({
    summary:
      'Registration in the system. Email with confirmation code will be send to passed email address.',
  })
  @ApiNoContentResponse({
    description:
      'Input data is accepted. Email with confirmation code will be send to passed email address.',
  })
  @ApiBadRequestResponse({
    description:
      'If the inputDto has incorrect values (in particular if the user with the given email or login already exists).',
    type: APIErrorResult,
  })
  @Post('registration')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registration(@Body() body: CreateUserInputDto): Promise<void> {
    return this.commandBus.execute(new RegisterUserCommand(body));
  }

  @ApiOperation({
    summary: 'Confirm registration.',
  })
  @ApiNoContentResponse({
    description: 'Email was verified. Account was activated.',
  })
  @ApiBadRequestResponse({
    description:
      'If the confirmation code is incorrect, expired or already been applied',
    type: APIErrorResult,
  })
  @Post('registration-confirmation')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registrationConfirmation(
    @Body() body: ConfirmationCodeInputDto,
  ): Promise<void> {
    return this.commandBus.execute(
      new RegistrationConfirmationCommand(body.code),
    );
  }

  @ApiOperation({
    summary: 'Resend confirmation code if user already exists.',
  })
  @ApiNoContentResponse({
    description:
      'Input data is accepted. Email with confirmation code will be send to passed email address.Confirmation code should be inside link as query param.',
  })
  @ApiBadRequestResponse({
    description: 'If the input model has incorrect values.',
    type: APIErrorResult,
  })
  @Post('registration-email-resending')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registrationEmailResending(@Body() body: EmailInputDto): Promise<void> {
    return this.commandBus.execute(
      new RegistrationEmailResendingCommand(body.email),
    );
  }

  @ApiOperation({
    summary: 'Try login user to the system.',
  })
  @ApiOkResponse({
    description:
      'Returns JWT accessToken in body and JWT refreshToken in cookie (http-only, secure).',
  })
  @ApiBadRequestResponse({
    description: 'If the input model has incorrect values.',
    type: APIErrorResult,
  })
  @ApiUnauthorizedResponse({
    description: 'If the username or password is wrong.',
  })
  @ApiBody({ type: LoginUserInputDto })
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

  @ApiOperation({
    summary:
      'In cookie client must send correct refreshToken that will be revoked.',
  })
  @ApiNoContentResponse({
    description: 'No content.',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized.',
  })
  @ApiCookieAuth('refreshToken')
  @UseGuards(JwtRefreshGuard)
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  async logout(@ExtractDeviceFromCookie() deviceId: string): Promise<void> {
    return this.commandBus.execute(new LogoutUserCommand(deviceId));
  }

  @ApiOperation({
    summary:
      'Generate new pair of access and refresh tokens (in cookie client must send correct refreshToken that will be revoked after refreshing). ' +
      'Device LastActiveDate should be overrode by issued Date of new refresh token.',
  })
  @ApiOkResponse({
    description:
      'Returns JWT accessToken in body and JWT refreshToken in cookie (http-only, secure).',
    type: AccessTokenViewDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized.',
  })
  @ApiCookieAuth('refreshToken')
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

  @ApiOperation({
    summary:
      'Password recovery via Email confirmation. Email should be sent with RecoveryCode inside.',
  })
  @ApiNoContentResponse({
    description: `Even if current email is not registered (for prevent user's email detection).`,
  })
  @ApiBadRequestResponse({
    description:
      'If the input model has invalid email (for example 222^gmail.com)',
    type: APIErrorResult,
  })
  @ApiBody({ type: EmailInputDto })
  @Post('password-recovery')
  @HttpCode(HttpStatus.NO_CONTENT)
  async recoverPassword(@Body() emailInputDto: EmailInputDto): Promise<void> {
    return this.commandBus.execute(new PasswordRecoveryCommand(emailInputDto));
  }

  @ApiOperation({
    summary: 'Confirm password recovery.',
  })
  @ApiNoContentResponse({
    description: 'If code is valid and new password is accepted.',
  })
  @ApiBadRequestResponse({
    description:
      'If the input model has incorrect values or recovery code is expired.',
    type: APIErrorResult,
  })
  @Post('new-password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePassword(
    @Body() newPasswordDto: NewPasswordInputDto,
  ): Promise<void> {
    return await this.commandBus.execute(
      new PasswordUpdateCommand(newPasswordDto),
    );
  }

  @ApiOperation({
    summary: 'Get information about current user.',
  })
  @ApiOkResponse({
    description: 'Success.',
    type: MeViewDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized.',
  })
  @ApiBearerAuth('bearer')
  @UseGuards(JwtBearerGuard)
  @Get('me')
  async getUserProfile(
    @ExtractUserFromRequest() userId: string,
  ): Promise<MeViewDto> {
    return this.usersQueryRepository.getUserProfile(userId);
  }

  @ApiOperation({
    summary: 'Initiate Google OAuth login flow. Redirects to Google.',
  })
  @ApiFoundResponse({
    description: 'Redirect to Google for authentication.',
  })
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @ApiOperation({
    summary:
      'Google OAuth callback. Returns accessToken in body and sets refreshToken in cookie.',
  })
  @ApiOkResponse({
    description:
      'Successful login. Returns JWT accessToken in body and refreshToken in secure httpOnly cookie.',
    type: AccessTokenViewDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized. Google login was denied by user.',
  })
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

  @ApiOperation({
    summary: 'Initiate Github OAuth login flow. Redirects to Github.',
  })
  @ApiFoundResponse({
    description: 'Redirect to Github for authentication.',
  })
  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth() {}

  @ApiOperation({
    summary:
      'Github OAuth callback. Returns accessToken in body and sets refreshToken in cookie.',
  })
  @ApiOkResponse({
    description:
      'Successful login. Returns JWT accessToken in body and refreshToken in secure httpOnly cookie.',
    type: AccessTokenViewDto,
  })
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
}
