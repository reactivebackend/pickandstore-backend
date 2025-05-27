import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

type ErrorMessage = {
  statusCode: number;
  field: string;
  message: string;
};

type ErrorResponse = {
  errorsMessages: ErrorMessage[];
};

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    debugger;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    debugger;
    const status: number =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorResponse: ErrorResponse = { errorsMessages: [] };

    if (exception instanceof HttpException) {
      const mistakeBody: any = exception.getResponse();
      debugger;
      const arr = Array.isArray(mistakeBody.message)
        ? mistakeBody.message
        : [
            {
              field: 'all-exception.filter.ts',
              message: 'Some error or Route not found',
            },
          ];

      arr.forEach((el) => {
        const obj = {
          statusCode: status,
          field: el.field,
          message: el.message,
        };
        errorResponse.errorsMessages.push(obj);
      });
      response.status(status).json(errorResponse);
    }
    // Some 500 error , no HttpException error
    else {
      errorResponse.errorsMessages.push({
        statusCode: status,
        field: request.url,
        message: 'Common error or guess, go to bed... everything is broken.',
      });

      response.status(status).json(errorResponse);
    }
  }
}
