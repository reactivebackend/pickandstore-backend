import { IsOptional, IsString, Length } from 'class-validator';
import { Trim } from '../../../../../../../libs/decorators/trim';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostInputDto {
  @ApiPropertyOptional({
    example: 'This is a short description of the post.',
    description: 'Post description. Maximum length is 500 characters',
    maxLength: 500,
  })
  @IsOptional()
  @Trim()
  @IsString()
  @Length(0, 500)
  description?: string;
}
