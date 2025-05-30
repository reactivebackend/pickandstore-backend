import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const ExtractRefreshTokenFromCookie = createParamDecorator(
  (data: unknown, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();

    const refreshToken = request.cookies.refreshToken;

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is missing in cookies!');
    }

    return refreshToken;
  },
);
