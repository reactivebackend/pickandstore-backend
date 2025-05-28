import { Trim } from '../../../../../../libs/decorators/trim';
import { IsString } from 'class-validator';

export class ConfirmationCodeInputDto {
  @Trim()
  @IsString()
  code: string;
}
