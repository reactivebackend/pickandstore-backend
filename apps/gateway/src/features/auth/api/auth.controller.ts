import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegistrationInputDto } from './dto/registration.input-dto';
import { RegistrationUserUsecase } from '../application/usecases/registration-user.usecase';
import { CommandBus } from '@nestjs/cqrs';
import { SwaggerRegistration } from './swagger/swagger-registartion.decorator';

@Controller('auth')
export class AuthController {
  constructor(protected commandBus: CommandBus) {}

  @HttpCode(HttpStatus.NO_CONTENT)
  @SwaggerRegistration()
  @Post('registration')
  async handleRegistration(
    @Body() registrationInputDto: RegistrationInputDto,
  ): Promise<void> {
    return await this.commandBus.execute(
      new RegistrationUserUsecase(registrationInputDto),
    );
  }
}
