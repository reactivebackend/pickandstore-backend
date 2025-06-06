import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';

@Injectable()
export class RecaptchaService {
  private readonly secretKey;

  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService<any, true>,
  ) {
    this.secretKey = this.configService.get('RECAPTCHA_SECRET_KEY');
  }

  async verify(
    token: string,
  ): Promise<AxiosResponse<RecaptchaResponse, null> | undefined> {
    return this.httpService
      .post(`https://www.google.com/recaptcha/api/siteverify`, null, {
        params: {
          secret: this.secretKey,
          response: token,
        },
      })
      .toPromise();
  }
}
