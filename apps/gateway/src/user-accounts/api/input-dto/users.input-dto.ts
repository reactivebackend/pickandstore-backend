import { Trim } from '../../../../../../libs/decorators/trim';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInputDto {
  @ApiProperty({
    example: 'user123',
    description: 'must be unique',
    minLength: 3,
    maxLength: 10,
    pattern: '^[a-zA-Z0-9_-]*$',
  })
  @Trim()
  @IsString()
  @Length(6, 30)
  @Matches(/^[a-zA-Z0-9_-]*$/, {
    message: 'Username must contain only 0-9, a-z, A-Z, _, -',
  })
  username: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'must be unique',
  })
  @Trim()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'P@ssw0rd!',
    minLength: 6,
    maxLength: 20,
    pattern: '^[0-9A-Za-z!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~]+$',
  })
  @Trim()
  @IsString()
  @Length(6, 20)
  @Matches(/^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/, {
    message:
      'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
  })
  password: string;
}

export class EmailInputDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'email of already registered but not confirmed',
  })
  @Trim()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '03AGdBq25L4X...',
    description:
      'token received from Google reCAPTCHA v3 to verify the user is not a bot',
  })
  @Trim()
  @IsNotEmpty()
  recaptchaToken: string;
}
