import { EmailService } from '../../src/notifications/email.service';

export class EmailServiceMock extends EmailService {
  async sendConfirmationEmail(email: string, code: string): Promise<void> {
    console.log('Call mock method sendConfirmationEmail / EmailServiceMock');

    return;
  }
}
