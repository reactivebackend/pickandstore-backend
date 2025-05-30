import { Global, Module } from '@nestjs/common';
import { EmailConfig } from './email.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './email.service';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (emailConfig: EmailConfig) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: emailConfig.emailAddress,
            pass: emailConfig.emailPassword,
          },
        },
        defaults: {
          from: `PickAndStore <${emailConfig.emailAddress}>`,
        },
      }),
      inject: [EmailConfig],
    }),
  ],
  providers: [EmailConfig, EmailService],
  exports: [EmailConfig, EmailService],
})
export class EmailModule {}
