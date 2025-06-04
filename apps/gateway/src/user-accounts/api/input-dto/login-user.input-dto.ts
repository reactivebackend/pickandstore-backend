import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Trim } from '../../../../../../libs/decorators/trim';

export class LoginUserInputDto {
  @ApiProperty({
    example: 'user@example.com',
  })
  @Trim()
  @IsString()
  usernameOrEmail: string;

  @ApiProperty({
    example: 'yourStrongPassword',
  })
  @Trim()
  @IsString()
  password: string;
}
