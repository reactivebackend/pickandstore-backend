import { IsString, Length } from 'class-validator';
import { Trim } from '../../../../../../../libs/decorators/trim';

export class PostInputDto {
  @Trim()
  @IsString()
  @Length(0, 500)
  description: string;
}
