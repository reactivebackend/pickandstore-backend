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

  @IsNotEmpty({ message: 'Set ENV variable PAYMENTS_SERVICE_HOST' })
  paymentsHost: string;

  @IsNumber({}, { message: 'Set ENV variable PAYMENTS_SERVICE_PORT' })
  paymentsPort: number;

  @IsNotEmpty({ message: 'Set ENV variable RABBIT_MQ_URL' })
  rabbitMqUrl: string;

  constructor(private configService: ConfigService<any, true>) {
    this.port = Number(this.configService.get('PORT'));
    this.databaseURL = this.configService.get('DATABASE_URL');
    this.filesHost = this.configService.get('FILES_SERVICE_HOST');
    this.filesPort = Number(this.configService.get('FILES_SERVICE_PORT'));
    this.paymentsHost = this.configService.get('PAYMENTS_SERVICE_HOST');
    this.paymentsPort = Number(this.configService.get('PAYMENTS_SERVICE_PORT'));
    this.rabbitMqUrl = this.configService.get('RABBIT_MQ_URL');

    configValidationUtility.validateConfig(this);
  }
}
