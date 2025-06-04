import { pipesSetup } from './pipes.setup';
import { INestApplication } from '@nestjs/common';
import { exceptionFilterSetup } from './exception-filter.setup';
import { globalPrefixSetup } from './global-prefix.setup';
import { swaggerSetup } from './swagger.setup';

export function appSetup(app: INestApplication) {
  pipesSetup(app);
  globalPrefixSetup(app);
  swaggerSetup(app);
  exceptionFilterSetup(app);
}
