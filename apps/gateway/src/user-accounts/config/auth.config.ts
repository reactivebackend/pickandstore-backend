import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNotEmpty } from 'class-validator';
import { configValidationUtility } from '../../../../../libs/config/config-validation.utility';

@Injectable()
export class AuthConfig {
  @IsNotEmpty({
    message: 'Set ENV variable BASIC_AUTH_USERNAME',
  })
  authUsername: string;

  @IsNotEmpty({
    message: 'Set ENV variable BASIC_AUTH_PASSWORD',
  })
  authPassword: string;

  constructor(private configService: ConfigService<any, true>) {
    this.authUsername = this.configService.get('BASIC_AUTH_USERNAME');
    this.authPassword = this.configService.get('BASIC_AUTH_PASSWORD');

    configValidationUtility.validateConfig(this);
  }
}
