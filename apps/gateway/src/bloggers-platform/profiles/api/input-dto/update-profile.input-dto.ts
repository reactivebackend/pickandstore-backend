import { Trim } from '../../../../../../../libs/decorators/trim';
import { IsDate, IsOptional, IsString, Length, Matches } from 'class-validator';
import { IsOlderThan } from '../../../../../../../libs/decorators/is-older-than';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileInputDto {
  @ApiProperty({
    example: 'john_doe123',
    description: 'must be unique',
    minLength: 6,
    maxLength: 30,
    pattern: '^[a-zA-Z0-9_-]*$',
  })
  @Trim()
  @IsString()
  @Length(6, 30)
  @Matches(/^[a-zA-Z0-9_-]*$/, {
    message: 'Username must contain only 0-9, a-z, A-Z, _, -',
  })
  username: string;

  @ApiProperty({
    description: 'First name (1–50 characters). Only letters allowed.',
    example: 'John',
  })
  @Trim()
  @IsString()
  @Length(1, 50)
  @Matches(/^[a-zA-Zа-яА-ЯёЁ]*$/, {
    message: 'FirstName must contain only letters (A-Z, a-z, А-Я, а-я)',
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name (1–50 characters). Only letters allowed.',
    example: 'Doe',
  })
  @Trim()
  @IsString()
  @Length(1, 50)
  @Matches(/^[a-zA-Zа-яА-ЯёЁ]*$/, {
    message: 'LastName must contain only letters (A-Z, a-z, А-Я, а-я)',
  })
  lastName: string;

  @ApiPropertyOptional({
    description: 'Date of birth. User must be at least 13 years old.',
    example: '2000-06-25T15:42:00.000Z',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  @IsOlderThan(13, {
    message: 'User must be at least 13 years old',
  })
  dateOfBirth?: Date;

  @ApiPropertyOptional({
    description: 'Country',
    example: 'Estonia',
  })
  @IsOptional()
  @Trim()
  @IsString()
  country?: string;

  @ApiPropertyOptional({
    description: 'City',
    example: 'Tallinn',
  })
  @IsOptional()
  @Trim()
  @IsString()
  city?: string;

  @ApiPropertyOptional({
    description:
      'About me section (max 200 characters). Letters, numbers, and common punctuation allowed.',
    example: 'I am developer!',
  })
  @IsOptional()
  @Trim()
  @IsString()
  @Length(0, 200)
  @Matches(/^[a-zA-Zа-яА-ЯёЁ0-9 .,!?\-@#%&*()_+=:;"']*$/, {
    message:
      'AboutMe must contain only letters (A-Z, a-z, А-Я, а-я), digits, and common punctuation characters',
  })
  aboutMe?: string;
}
