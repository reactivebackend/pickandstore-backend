import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNotEmpty } from 'class-validator';
import { configValidationUtility } from '../../../../../libs/config/config-validation.utility';

@Injectable()
export class OAuthConfig {
  @IsNotEmpty({
    message: 'Set ENV variable GOOGLE_CLIENT_ID',
  })
  googleClientId: string;

  @IsNotEmpty({
    message: 'Set ENV variable GOOGLE_CLIENT_SECRET',
  })
  googleClientSecret: string;

  @IsNotEmpty({
    message: 'Set ENV variable GOOGLE_CALLBACK_URL',
  })
  googleCallbackUrl: string;

  @IsNotEmpty({
    message: 'Set ENV variable GITHUB_CLIENT_ID',
  })
  githubClientId: string;

  @IsNotEmpty({
    message: 'Set ENV variable GITHUB_CLIENT_SECRET',
  })
  githubClientSecret: string;

  @IsNotEmpty({
    message: 'Set ENV variable GITHUB_CALLBACK_URL',
  })
  githubCallbackUrl: string;

  constructor(private configService: ConfigService<any, true>) {
    this.googleClientId = this.configService.get('GOOGLE_CLIENT_ID');
    this.googleClientSecret = this.configService.get('GOOGLE_CLIENT_SECRET');
    this.googleCallbackUrl = this.configService.get('GOOGLE_CALLBACK_URL');

    this.githubClientId = this.configService.get('GITHUB_CLIENT_ID');
    this.githubClientSecret = this.configService.get('GITHUB_CLIENT_SECRET');
    this.githubCallbackUrl = this.configService.get('GITHUB_CALLBACK_URL');

    configValidationUtility.validateConfig(this);
  }
}
