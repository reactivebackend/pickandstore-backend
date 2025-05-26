import {
  IsIn,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
//import { ApiProperty } from '@nestjs/swagger';
import { validationConstants } from '../../../../common/utils/validation-constants';

export class RegistrationInputDto {
  /*  @ApiProperty({
      description: 'Username for registration',
      type: String,
      required: true,
      example: 'qwerTy1',
      minLength: validationConstants.USERNAME_MIN_LENGTH,
      maxLength: validationConstants.USERNAME_MAX_LENGTH,
      pattern: validationConstants.USERNAME_PATTERN,
    })*/
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams): string =>
    typeof value === 'string' ? value.trim() : value,
  )
  @MinLength(validationConstants.USERNAME_MIN_LENGTH, {
    message: 'Minimum number of characters 6',
  })
  @MaxLength(validationConstants.USERNAME_MAX_LENGTH, {
    message: 'Maximum number of characters 30',
  })
  @Matches(new RegExp(validationConstants.USERNAME_PATTERN), {
    message: 'Username can only contain: 0-9; A-Z; a-z; _ ; -;',
  })
  username: string;

  /*  @ApiProperty({
      description: 'Password for registration',
      type: String,
      required: true,
      example: 'qwerTy1@',
      minLength: validationConstants.PASSWORD_MIN_LENGTH,
      maxLength: validationConstants.PASSWORD_MAX_LENGTH,
      pattern: validationConstants.PASSWORD_PATTERN,
    })*/
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams): string =>
    typeof value === 'string' ? value.trim() : value,
  )
  @MinLength(validationConstants.PASSWORD_MIN_LENGTH, {
    message: 'Minimum number of characters 6',
  })
  @MaxLength(validationConstants.PASSWORD_MAX_LENGTH, {
    message: 'Maximum number of characters 20',
  })
  @Matches(
    new RegExp(validationConstants.PASSWORD_PATTERN),

    {
      message:
        'Password must contain 0-9, a-z, A-Z, !"#$%&\\\'()*+,-./:;<=>?@[\\\\]^_`{|}~',
    },
  )
  password: string;

  /*@ApiProperty({
    description: 'Email for registration',
    type: String,
    required: true,
    example: 'qwerty@mail.ru',
    pattern: validationConstants.EMAIL_PATTERN,
  })*/
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams): string =>
    typeof value === 'string' ? value.trim() : value,
  )
  @Matches(new RegExp(validationConstants.EMAIL_PATTERN), {
    message: 'The email must match the format example@example.com',
  })
  email: string;

  /* @ApiProperty({
     description: 'IsTermsAgreed for registration',
     type: String,
     required: true,
     example: 'true',
     pattern: validationConstants.TERMS_AGREED_PATTERN,
   })*/
  @IsNotEmpty()
  @IsIn(['true', 'false'], {
    message: 'The checkbox must match  "true" or "false".',
  })
  isTermsAgreed: string;
}
