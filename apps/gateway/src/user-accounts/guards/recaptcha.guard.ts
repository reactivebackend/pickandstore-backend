import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RecaptchaService } from '../application/recaptcha.service';
import { EmailInputDto } from '../api/input-dto/users.input-dto';
import { BadRequestDomainException } from '../../../../../libs/exceptions/domain-exceptions';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(private readonly recaptchaService: RecaptchaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const body: EmailInputDto = request.body;

    if (!body.recaptchaToken) {
      throw BadRequestDomainException.create(
        'recaptcha token is missing',
        'recaptchaToken',
      );
    }

    const result = await this.recaptchaService.verify(body.recaptchaToken);
    if (!result) return false;
    return result.data.score >= 0.9;
  }
}
