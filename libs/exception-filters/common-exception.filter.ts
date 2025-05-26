import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    debugger;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    debugger;
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorResponse = { errorsMessages: [] };

    if (exception instanceof HttpException) {
      const mistakeBody: any = exception.getResponse();
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
        //errorResponse.errorsMessages.push(obj);
        errorResponse.errorsMessages.push();
      });
      // response.status(status).json(errorResponse);
    }
    // Some 500 error , no HttpException error
    else {
      /* errorResponse.errorsMessages.push({
        statusCode: status,
        field: request.url,
        message: 'Common error or guess, go to bed... everything is broken.',
      });

      response.status(status).json(errorResponse);*/
    }
  }
}
