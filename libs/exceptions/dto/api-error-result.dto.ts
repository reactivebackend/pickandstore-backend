import { ApiProperty } from '@nestjs/swagger';

export class FieldError {
  @ApiProperty({
    type: String,
    example: 'Invalid email format',
    description: 'Message with error explanation for certain field',
    required: false,
    nullable: true,
  })
  message?: string;

  @ApiProperty({
    type: String,
    example: 'email',
    description: 'What field/property of input model has error',
    required: false,
    nullable: true,
  })
  field?: string;
}

export class APIErrorResult {
  @ApiProperty({
    type: [FieldError],
    required: false,
    nullable: true,
  })
  errorsMessages?: FieldError[];
}
