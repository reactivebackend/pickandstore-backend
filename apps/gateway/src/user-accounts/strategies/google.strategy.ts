import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../application/auth.service';
import { OAuthConfig } from '../config/oauth.config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private authService: AuthService,
    private oauthConfig: OAuthConfig,
  ) {
    super({
      clientID: oauthConfig.googleClientId,
      clientSecret: oauthConfig.googleClientSecret,
      callbackURL: oauthConfig.googleCallbackUrl,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const user = await this.authService.validateOAuthLogin(profile, 'google');
    done(null, user);
  }
}
