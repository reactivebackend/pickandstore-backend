import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../../generated/prisma';
import { AuthService } from '../application/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'usernameOrEmail',
    });
  }

  async validate(usernameOrEmail: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(usernameOrEmail, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
