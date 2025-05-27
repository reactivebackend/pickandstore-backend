import { Injectable } from '@nestjs/common';
import { CoreConfig } from '../../../../../libs/config/core.config';

@Injectable()
export class EmailCreatorService {
  constructor(protected сoreConfig: CoreConfig) {}

  createRegistrationEmail(code: string) {
    return `<h1>Thank for your registration</h1>
 <p>To finish registration please follow the link below:
     <a href="${this.сoreConfig.appUrl}/confirm-email?code=${code}">complete registration</a>
    
 </p>`;
  }
}
