import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserInputDto, EmailInputDto } from './input-dto/users.input-dto';
import { RegisterUserCommand } from '../application/usecases/register-user.usecase';
import { ConfirmationCodeInputDto } from './input-dto/confirmation-code.input-dto';
import { RegistrationConfirmationCommand } from '../application/usecases/registration-confirmation.usecase';
import { RegistrationEmailResendingCommand } from '../application/usecases/registration-email-resending.usecase';

@Controller('auth')
export class AuthController {
  constructor(private commandBus: CommandBus) {}

  @Post('registration')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registration(@Body() body: CreateUserInputDto): Promise<void> {
    return this.commandBus.execute(new RegisterUserCommand(body));
  }

  @Post('registration-confirmation')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registrationConfirmation(
    @Body() body: ConfirmationCodeInputDto,
  ): Promise<void> {
    return this.commandBus.execute(
      new RegistrationConfirmationCommand(body.code),
    );
  }

  @Post('registration-email-resending')
  @HttpCode(HttpStatus.NO_CONTENT)
  async registrationEmailResending(@Body() body: EmailInputDto): Promise<void> {
    return this.commandBus.execute(
      new RegistrationEmailResendingCommand(body.email),
    );
  }
}
