import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { cookieExtractor } from '../utils/cookie-extractor';
import { JwtConfig } from '../config/jwt.config';
import { RefreshTokenPayload } from '../guards/dto/refresh-token-payload.dto';
import { DevicesRepository } from '../infrastructure/devices.repository';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh',
) {
  constructor(
    private devicesRepository: DevicesRepository,
    private jwtConfig: JwtConfig,
  ) {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: jwtConfig.refreshTokenSecret,
    });
  }

  async validate(payload: RefreshTokenPayload): Promise<{ id: string }> {
    const device = await this.devicesRepository.getDeviceById(payload.deviceId);

    if (!device) {
      throw new UnauthorizedException('Device not found');
    }

    if (payload.iat * 1000 < device.lastActiveDate.getTime()) {
      throw new UnauthorizedException('Refresh token is invalid');
    }

    return {
      id: payload.sub,
    };
  }
}
