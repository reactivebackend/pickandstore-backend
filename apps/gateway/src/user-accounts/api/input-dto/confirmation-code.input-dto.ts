import { Trim } from '../../../../../../libs/decorators/trim';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConfirmationCodeInputDto {
  @ApiProperty({
    example: '9f7bce3b-4200-400b-aee0-8cdea4e536db',
    description: 'code that be sent via Email inside link',
  })
  @Trim()
  @IsString()
  code: string;
}
