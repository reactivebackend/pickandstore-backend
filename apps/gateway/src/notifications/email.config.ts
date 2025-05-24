import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { configValidationUtility } from '../../../../libs/config/config-validation.utility';

@Injectable()
export class EmailConfig {
  @IsNotEmpty({
    message: 'Set ENV variable EMAIL',
  })
  @IsEmail()
  emailAddress: string;

  @IsNotEmpty({
    message: 'Set ENV variable EMAIL_PASSWORD',
  })
  emailPassword: string;

  constructor(private configService: ConfigService<any, true>) {
    this.emailAddress = this.configService.get('EMAIL');
    this.emailPassword = this.configService.get('EMAIL_PASSWORD');

    configValidationUtility.validateConfig(this);
  }
}
