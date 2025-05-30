import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IsNotEmpty } from 'class-validator';
import { configValidationUtility } from '../../../../../libs/config/config-validation.utility';

@Injectable()
export class JwtConfig {
  @IsNotEmpty({
    message: 'Set ENV variable JWT_ACCESS_SECRET',
  })
  accessTokenSecret: string;

  @IsNotEmpty({
    message: 'Set ENV variable JWT_REFRESH_SECRET',
  })
  refreshTokenSecret: string;

  @IsNotEmpty({
    message: 'Set ENV variable JWT_ACCESS_EXPIRATION_TIME',
  })
  accessTokenExpirationTime: string;

  @IsNotEmpty({
    message: 'Set ENV variable JWT_REFRESH_EXPIRATION_TIME',
  })
  refreshTokenExpirationTime: string;

  constructor(private configService: ConfigService<any, true>) {
    this.accessTokenSecret = this.configService.get('JWT_ACCESS_SECRET');
    this.refreshTokenSecret = this.configService.get('JWT_REFRESH_SECRET');
    this.accessTokenExpirationTime = this.configService.get(
      'JWT_ACCESS_EXPIRATION_TIME',
    );
    this.refreshTokenExpirationTime = this.configService.get(
      'JWT_REFRESH_EXPIRATION_TIME',
    );

    configValidationUtility.validateConfig(this);
  }
}
