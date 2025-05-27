import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { configValidationUtility } from './config-validation.utility';

@Injectable()
export class CoreConfig {
  @IsNumber({}, { message: 'Set ENV variable PORT' })
  port: number;

  @IsNotEmpty({ message: 'Set ENV variable DATABASE_URL' })
  databaseURL: string;

  @IsNotEmpty({ message: 'Set ENV variable FILES_SERVICE_HOST' })
  filesHost: string;

  @IsNumber({}, { message: 'Set ENV variable FILES_SERVICE_PORT' })
  filesPort: number;

  @IsNumber({}, { message: 'Set ENV variable ROUND_SALT_FOR_HASHPASSWORD' })
  saltRounds: number;

  @IsNotEmpty({ message: 'Set ENV variable APP_URL' })
  appUrl: string;

  @IsNotEmpty({ message: 'Set ENV variable EMAIL_SERVICE' })
  emailServiceName: string;

  @IsNotEmpty({ message: 'Set ENV variable EMAIL_USER' })
  emailUser: string;

  @IsNotEmpty({ message: 'Set ENV variable EMAIL_PASSWORD' })
  emailPassword: string;

  constructor(private configService: ConfigService<any, true>) {
    this.port = Number(this.configService.get('PORT'));
    this.databaseURL = this.configService.get('DATABASE_URL');
    this.filesHost = this.configService.get('FILES_SERVICE_HOST');
    this.filesPort = Number(this.configService.get('FILES_SERVICE_PORT'));
    this.saltRounds = Number(
      this.configService.get('ROUND_SALT_FOR_HASHPASSWORD'),
    );
    this.appUrl = this.configService.get('APP_URL');
    this.emailServiceName = this.configService.get('EMAIL_SERVICE');
    this.emailUser = this.configService.get('EMAIL_USER');
    this.emailPassword = this.configService.get('EMAIL_PASSWORD');

    configValidationUtility.validateConfig(this);
  }
}
