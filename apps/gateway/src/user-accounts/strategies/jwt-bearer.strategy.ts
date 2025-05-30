import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtConfig } from '../config/jwt.config';

@Injectable()
export class JwtBearerStrategy extends PassportStrategy(Strategy, 'bearer') {
  constructor(private jwtConfig: JwtConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.accessTokenSecret,
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
    };
  }
}
