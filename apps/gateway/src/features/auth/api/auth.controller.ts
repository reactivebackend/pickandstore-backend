import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegistrationInputDto } from './dto/registration.input-dto';

@Controller('auth')
export class AuthController {
  constructor() /*protected commandBus: CommandBus,
    protected ipHelper: IpHelper,*/ {}

  //@HttpCode(HttpStatus.NO_CONTENT)
  @HttpCode(HttpStatus.OK)
  // @SwaggerRegistration()
  @Post('registration')
  //: Promise<void>
  handleRegistration(@Body() registrationInputDto: RegistrationInputDto) {
    return registrationInputDto;
    /*  return await this.commandBus.execute(
        new RegistrationUserCommand(registrationInputDto),
      );*/
  }
}
