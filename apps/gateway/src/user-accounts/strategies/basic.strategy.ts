import { BasicStrategy as Strategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthConfig } from '../config/auth.config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  private readonly validUsername: string;
  private readonly validPassword: string;

  constructor(private authConfig: AuthConfig) {
    super();
    this.validUsername = this.authConfig.authUsername;
    this.validPassword = this.authConfig.authPassword;
  }

  public validate = async (username, password): Promise<boolean> => {
    if (this.validUsername === username && this.validPassword === password) {
      return true;
    }
    throw new UnauthorizedException();
  };
}
