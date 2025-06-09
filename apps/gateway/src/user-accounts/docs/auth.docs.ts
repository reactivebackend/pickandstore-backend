import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiNoContentResponse,
  ApiBadRequestResponse,
  ApiCookieAuth,
  ApiBody,
  ApiBearerAuth,
  ApiFoundResponse,
} from '@nestjs/swagger';
import { APIErrorResult } from '../../../../../libs/exceptions/dto/api-error-result.dto';
import { LoginUserInputDto } from '../api/input-dto/login-user.input-dto';
import { AccessTokenViewDto } from '../api/view-dto/access-token.view-dto';
import { EmailInputDto } from '../api/input-dto/users.input-dto';
import { MeViewDto } from '../api/view-dto/users.view-dto';

export function RegistrationDocs() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Registration in the system. Email with confirmation code will be send to passed email address.',
    }),
    ApiNoContentResponse({
      description:
        'Input data is accepted. Email with confirmation code will be send to passed email address.',
    }),
    ApiBadRequestResponse({
      description:
        'If the inputDto has incorrect values (in particular if the user with the given email or login already exists).',
      type: APIErrorResult,
    }),
  );
}

export function RegistrationConfirmationDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Confirm registration.',
    }),
    ApiNoContentResponse({
      description: 'Email was verified. Account was activated.',
    }),
    ApiBadRequestResponse({
      description:
        'If the confirmation code is incorrect, expired or already been applied',
      type: APIErrorResult,
    }),
  );
}

export function RegistrationEmailResendingDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Resend confirmation code if user already exists.',
    }),
    ApiNoContentResponse({
      description:
        'Input data is accepted. Email with confirmation code will be send to passed email address.Confirmation code should be inside link as query param.',
    }),
    ApiBadRequestResponse({
      description: 'If the input model has incorrect values.',
      type: APIErrorResult,
    }),
  );
}

export function LoginDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Try login user to the system.',
    }),
    ApiOkResponse({
      description:
        'Returns JWT accessToken in body and JWT refreshToken in cookie (http-only, secure).',
    }),
    ApiBadRequestResponse({
      description: 'If the input model has incorrect values.',
      type: APIErrorResult,
    }),
    ApiUnauthorizedResponse({
      description: 'If the username or password is wrong.',
    }),
    ApiBody({ type: LoginUserInputDto }),
  );
}

export function LogoutDocs() {
  return applyDecorators(
    ApiOperation({
      summary:
        'In cookie client must send correct refreshToken that will be revoked.',
    }),
    ApiNoContentResponse({
      description: 'No content.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiCookieAuth('refreshToken'),
  );
}

export function RefreshTokensDocs() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Generate new pair of access and refresh tokens (in cookie client must send correct refreshToken that will be revoked after refreshing). ' +
        'Device LastActiveDate should be overrode by issued Date of new refresh token.',
    }),
    ApiOkResponse({
      description:
        'Returns JWT accessToken in body and JWT refreshToken in cookie (http-only, secure).',
      type: AccessTokenViewDto,
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiCookieAuth('refreshToken'),
  );
}

export function RecoverPasswordDocs() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Password recovery via Email confirmation. Email should be sent with RecoveryCode inside.',
    }),
    ApiNoContentResponse({
      description: `Even if current email is not registered (for prevent user's email detection).`,
    }),
    ApiBadRequestResponse({
      description:
        'If the input model has invalid email (for example 222^gmail.com) or recaptcha token is missing.',
      type: APIErrorResult,
    }),
    ApiBody({ type: EmailInputDto }),
  );
}

export function UpdatePasswordDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Confirm password recovery.',
    }),
    ApiNoContentResponse({
      description: 'If code is valid and new password is accepted.',
    }),
    ApiBadRequestResponse({
      description:
        'If the input model has incorrect values or recovery code is expired.',
      type: APIErrorResult,
    }),
  );
}

export function GetUserProfileDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Get information about current user.',
    }),
    ApiOkResponse({
      description: 'Success.',
      type: MeViewDto,
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBearerAuth('bearer'),
  );
}

export function GoogleAuthDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Initiate Google OAuth login flow. Redirects to Google.',
    }),
    ApiFoundResponse({
      description: 'Redirect to Google for authentication.',
    }),
  );
}

export function GoogleAuthRedirectDocs() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Google OAuth callback. Returns accessToken in body and sets refreshToken in cookie.',
    }),
    ApiOkResponse({
      description:
        'Successful login. Returns JWT accessToken in body and refreshToken in secure httpOnly cookie.',
      type: AccessTokenViewDto,
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized. Google login was denied by user.',
    }),
  );
}

export function GithubAuthDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Initiate Github OAuth login flow. Redirects to Github.',
    }),
    ApiFoundResponse({
      description: 'Redirect to Github for authentication.',
    }),
  );
}

export function GithubAuthRedirectDocs() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Github OAuth callback. Returns accessToken in body and sets refreshToken in cookie.',
    }),
    ApiOkResponse({
      description:
        'Successful login. Returns JWT accessToken in body and refreshToken in secure httpOnly cookie.',
      type: AccessTokenViewDto,
    }),
  );
}
