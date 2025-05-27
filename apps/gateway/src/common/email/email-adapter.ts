import { Injectable } from '@nestjs/common';
import { CoreConfig } from '../../../../../libs/config/core.config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailAdapter {
  constructor(protected сoreConfig: CoreConfig) {}

  async sendEmail(email: string, letter: string, emailTitle: string) {
    const transport = nodemailer.createTransport({
      service: this.сoreConfig.emailServiceName,
      auth: {
        user: this.сoreConfig.emailUser,
        pass: this.сoreConfig.emailPassword,
      },
    });

    await transport.sendMail({
      from: this.сoreConfig.emailUser,
      to: email,
      subject: emailTitle,
      html: letter,
    });
  }
}
