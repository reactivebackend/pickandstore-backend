import { IsString, Length } from 'class-validator';
import { Trim } from '../../../../../../../libs/decorators/trim';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostInputDto {
  @ApiProperty({
    example: 'This is a short description of the post.',
    description: 'Post description.',
    maxLength: 500,
  })
  @Trim()
  @IsString()
  @Length(0, 500)
  description: string;
}
