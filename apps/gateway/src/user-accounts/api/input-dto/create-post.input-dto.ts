import { IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(6, 20)
  title: string;
  @Length(6, 100)
  @IsString()
  content: string;
}
