import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNotEmpty } from 'class-validator';
import { configValidationUtility } from '../../../../../libs/config/config-validation.utility';

@Injectable()
export class RecaptchaConfig {
  @IsNotEmpty({
    message: 'Set ENV variable RECAPTCHA_SECRET_KEY',
  })
  secretKey: string;

  constructor(private configService: ConfigService<any, true>) {
    this.secretKey = this.configService.get('RECAPTCHA_SECRET_KEY');

    configValidationUtility.validateConfig(this);
  }
}
