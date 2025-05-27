import {
  Body,
  Controller,
  ForbiddenException,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegistrationInputDto } from './dto/registration.input-dto';
import { ErrorObject } from '../../../../../../libs/utils/error-object';
import { RegistrationUserUsecase } from '../application/usecases/registration-user.usecase';
import { CommandBus } from '@nestjs/cqrs';

@Controller('auth')
export class AuthController {
  constructor(protected commandBus: CommandBus) {}

  //@HttpCode(HttpStatus.NO_CONTENT)
  @HttpCode(HttpStatus.OK)
  // @SwaggerRegistration()
  @Post('registration')
  //: Promise<void>
  async handleRegistration(@Body() registrationInputDto: RegistrationInputDto) {
    /* throw new ForbiddenException(
       ErrorObject.createError('User with this email is already registered'),
     );*/
    //throw new Error('Сообщение об ошибке');

    //return registrationInputDto;
    return await this.commandBus.execute(
      new RegistrationUserUsecase(registrationInputDto),
    );
  }
}
