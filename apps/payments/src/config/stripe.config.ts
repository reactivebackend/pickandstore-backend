import { Injectable } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { ConfigService } from '@nestjs/config';
import { configValidationUtility } from '../../../../libs/config/config-validation.utility';

@Injectable()
export class StripeConfig {
  @IsNotEmpty({
    message: 'Set ENV variable STRIPE_PUBLIC_KEY',
  })
  publicKey: string;

  @IsNotEmpty({
    message: 'Set ENV variable STRIPE_SECRET_KEY',
  })
  secretKey: string;

  @IsNotEmpty({
    message: 'Set ENV variable STRIPE_EVENT_KEY',
  })
  eventKey: string;

  apiVersion = '2025-06-30.basil' as const;

  constructor(private configService: ConfigService<any, true>) {
    this.publicKey = this.configService.get('STRIPE_PUBLIC_KEY');
    this.secretKey = this.configService.get('STRIPE_SECRET_KEY');
    this.eventKey = this.configService.get('STRIPE_EVENT_KEY');

    configValidationUtility.validateConfig(this);
  }
}
