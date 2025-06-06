import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { RecaptchaConfig } from '../config/recaptcha.config';

@Injectable()
export class RecaptchaService {
  constructor(
    private httpService: HttpService,
    private recaptchaConfig: RecaptchaConfig,
  ) {}

  async verify(
    token: string,
  ): Promise<AxiosResponse<RecaptchaResponse, null> | undefined> {
    return this.httpService
      .post(`https://www.google.com/recaptcha/api/siteverify`, null, {
        params: {
          secret: this.recaptchaConfig.secretKey,
          response: token,
        },
      })
      .toPromise();
  }
}
