import { IsString, Length, Matches } from 'class-validator';
import { Trim } from '../../../../../../libs/decorators/trim';
import { ApiProperty } from '@nestjs/swagger';

export class NewPasswordInputDto {
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
  newPassword: string;

  @ApiProperty({
    example: 'd64761ad-dce6-464e-8fc9-e537a24fcd8e',
  })
  @Trim()
  @IsString()
  recoveryCode: string;
}
