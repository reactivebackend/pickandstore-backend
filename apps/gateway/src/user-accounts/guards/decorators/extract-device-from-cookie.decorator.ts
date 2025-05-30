import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import jwt from 'jsonwebtoken';

export const ExtractDeviceFromCookie = createParamDecorator(
  (data: unknown, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();

    const refreshToken = request.cookies.refreshToken;

    if (!refreshToken) {
      throw new Error('Refresh token is missing in cookies!');
    }

    const decoded: any = jwt.decode(refreshToken);

    if (!decoded) {
      throw new Error('Invalid or malformed refresh token!');
    }

    return decoded.deviceId;
  },
);
