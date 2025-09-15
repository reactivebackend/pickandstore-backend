import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { JwtConfig } from '../config/jwt.config';
import { Socket } from 'socket.io';

@Injectable()
export class JwtWsStrategy extends PassportStrategy(Strategy, 'jwt-ws') {
  constructor(private jwtConfig: JwtConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          debugger;
          const socket: Socket = request;
          return socket.handshake.query.token;
        },
      ]),
      secretOrKey: jwtConfig.accessTokenSecret,
      passReqToCallback: false, // чтобы получить socket в validate()
    } as StrategyOptions);
  }

  async validate(payload: any) {
    debugger;
    return {
      id: payload.sub,
    };
  }
}
