import { IsString, Length, Matches } from 'class-validator';
import { Trim } from '../../../../../../libs/decorators/trim';

export class NewPasswordInputDto {
  @Trim()
  @IsString()
  @Length(6, 20)
  @Matches(/^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/, {
    message:
      'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
  })
  newPassword: string;

  @Trim()
  @IsString()
  recoveryCode: string;
}
