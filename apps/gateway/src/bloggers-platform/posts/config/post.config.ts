import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNotEmpty } from 'class-validator';
import { configValidationUtility } from '../../../../../../libs/config/config-validation.utility';

@Injectable()
export class PostConfig {
  @IsNotEmpty({
    message: 'Set ENV variable ACCESS_KEY_ID',
  })
  accessKeyId: string;
  @IsNotEmpty({
    message: 'Set ENV variable SECRET_ACCESS_KEY',
  })
  secretAccessKey: string;

  constructor(private configService: ConfigService<any, true>) {
    this.accessKeyId = this.configService.get('ACCESS_KEY_ID');
    this.secretAccessKey = this.configService.get('SECRET_ACCESS_KEY');

    configValidationUtility.validateConfig(this);
  }
}
