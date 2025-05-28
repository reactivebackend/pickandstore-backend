import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { cookieExtractor } from '../utils/cookie-extractor';
import { ValidateRefreshTokenCommand } from '../application/usecases/validate-refresh-token.use-case';
import { jwtConstants } from '../config/constants';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh',
) {
  constructor(private commandBus: CommandBus) {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: jwtConstants.refreshTokenSecret,
    });
  }

  async validate(payload: any) {
    const result = await this.commandBus.execute(
      new ValidateRefreshTokenCommand(payload),
    );
    if (!result) {
      throw new UnauthorizedException();
    }
    return {
      id: payload.sub,
    };
  }
}
