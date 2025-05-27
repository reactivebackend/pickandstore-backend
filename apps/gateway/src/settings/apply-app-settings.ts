import {
  BadRequestException,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { CommonExceptionFilter } from '../../../../libs/exception-filters/common-exception.filter';

type ErrorResponseType = {
  field: string;
  message: string;
};

export const applyAppSettings = (app: INestApplication) => {
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,

      stopAtFirstError: true,

      exceptionFactory: (errors) => {
        const errorForResponse: ErrorResponseType[] = [];
        errors.forEach((el) => {
          const messageFromDto = el.constraints || {
            1: 'Some mistake from inputDto',
          };
          const key = Object.keys(messageFromDto)[0];
          const obj = {
            field: el.property,
            message: el.constraints
              ? el.constraints[key]
              : 'Some mistake from inputDto',
          };
          errorForResponse.push(obj);
        });
        throw new BadRequestException(errorForResponse);
      },
    }),
  );
  app.useGlobalFilters(new CommonExceptionFilter());
};
