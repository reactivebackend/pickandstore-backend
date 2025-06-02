import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { OAuthConfig } from '../config/oauth.config';
import { AuthService } from '../application/auth.service';
import { VerifyCallback } from 'passport-oauth2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    private authService: AuthService,
    private oauthConfig: OAuthConfig,
  ) {
    super({
      clientID: oauthConfig.githubClientId,
      clientSecret: oauthConfig.githubClientSecret,
      callbackURL: oauthConfig.githubCallbackUrl,
      scope: ['user:email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const user = await this.authService.validateOAuthLogin(profile, 'github');
    done(null, user);
  }
}
