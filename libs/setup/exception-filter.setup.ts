import { INestApplication } from '@nestjs/common';
import { AllExceptionsFilter } from '../exceptions/filters/all-exceptions-filter';
import { DomainExceptionsFilter } from '../exceptions/filters/domain-exeption-filter';

export function exceptionFilterSetup(app: INestApplication) {
  app.useGlobalFilters(
    app.get(AllExceptionsFilter),
    new DomainExceptionsFilter(),
  );
}
