import { Trim } from '../../../../../../libs/decorators/trim';
import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateUserInputDto {
  @Trim()
  @IsString()
  @Length(6, 30)
  @Matches(/^[a-zA-Z0-9_-]*$/, {
    message: 'Username must contain only 0-9, a-z, A-Z, _, -',
  })
  username: string;

  @Trim()
  @IsString()
  @IsEmail()
  email: string;

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
  @Trim()
  @IsString()
  @IsEmail()
  email: string;
}
