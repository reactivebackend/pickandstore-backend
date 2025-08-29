import { HttpStatus, NotFoundException } from '@nestjs/common';
import {
  BadRequestDomainException,
  ForbiddenDomainException,
} from './domain-exceptions';

type RpcError = {
  status: HttpStatus;
  message: string;
  field: string;
};

export function handleRpcError(err: RpcError): never {
  const status = err.status;
  const message = err.message;
  const field = err.field;

  switch (status) {
    case HttpStatus.BAD_REQUEST:
      throw BadRequestDomainException.create(message, field);
    case HttpStatus.NOT_FOUND:
      throw new NotFoundException();
    case HttpStatus.FORBIDDEN:
      throw ForbiddenDomainException.create(message, field);
    default:
      throw BadRequestDomainException.create(message, field);
  }
}
