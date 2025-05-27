import { RegistrationInputDto } from '../dto/registration.input-dto';
import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SwaggerRegistration() {
  return applyDecorators(
    ApiOperation({
      summary:
        'Регистрация пользователя в системе. На указанный адрес электронной почты будет отправлено письмо с кодом подтверждения',
    }),
    ApiBody({ type: RegistrationInputDto }),
    ApiResponse({
      status: 204,
      description:
        'Данные приняты. Письмо с кодом подтверждения отправлено на указанный адрес электронной почты',
    }),
    ApiResponse({
      status: 400,
      description:
        'Если вводимые данные  имеют неожидаемые значения либо  если пользователь с указанным адресом электронной почты уже существует',
    }),
  );
}
