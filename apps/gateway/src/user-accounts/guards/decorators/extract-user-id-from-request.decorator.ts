import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ExtractUserFromRequest = createParamDecorator(
  (data: unknown, context: ExecutionContext): number => {
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    if (!user) {
      throw new Error('there is no user in the request object!');
    }

    return request.user.id;
  },
);
