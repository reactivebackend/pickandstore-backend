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

  constructor(private configService: ConfigService<any, true>) {
    this.port = Number(this.configService.get('PORT'));
    this.databaseURL = this.configService.get('DATABASE_URL');

    configValidationUtility.validateConfig(this);
  }
}
