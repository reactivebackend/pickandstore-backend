import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  sendConfirmationEmail(email: string, code: string) {
    this.mailerService.sendMail({
      to: email,
      subject: 'Confirm your registration',
      html: ` <h1>Welcome to PickAndStore!</h1>
                <p>To finish registration please follow the link below:<br>
                   <a href='https://pickandstore.com/auth/email-confirmation?code=${code}'>Complete registration</a>
               </p>`,
    });
  }

  sendPasswordRecoveryEmail(email: string, code: string) {
    this.mailerService.sendMail({
      to: email,
      subject: 'Password recovery',
      html: ` <h1>Password recovery</h1>
               <p>To finish password recovery please follow the link below:
                  <a href='https://pickandstore.com/auth/create-new-password?code=${code}'>Recovery password</a>
              </p>`,
    });
  }
}
