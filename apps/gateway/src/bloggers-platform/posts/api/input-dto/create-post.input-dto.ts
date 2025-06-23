import { IsString, Length } from 'class-validator';
import { Trim } from '../../../../../../../libs/decorators/trim';

export class CreatePostInputDto {
  @Trim()
  @IsString()
  @Length(6, 20)
  title: string;

  @Trim()
  @IsString()
  @Length(6, 100)
  content: string;
}
