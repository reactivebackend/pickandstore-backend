import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtConfig } from '../config/jwt.config';

@Injectable()
export class JwtBearerStrategy extends PassportStrategy(Strategy, 'bearer') {
  constructor(private jwtConfig: JwtConfig) {
    super({
      jwtFromRequest: JwtBearerStrategy.extractAccessToken,
      ignoreExpiration: false,
      secretOrKey: jwtConfig.accessTokenSecret,
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
    };
  }

  private static extractAccessToken(this: void, req: Request): string | null {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
      return authHeader.slice(7);
    }

    return req.cookies?.accessToken ?? null;
  }
}
