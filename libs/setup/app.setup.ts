import { pipesSetup } from './pipes.setup';
import { INestApplication } from '@nestjs/common';
import { exceptionFilterSetup } from './exception-filter.setup';
import { globalPrefixSetup } from './global-prefix.setup';

export function appSetup(app: INestApplication) {
  pipesSetup(app);
  globalPrefixSetup(app);
  exceptionFilterSetup(app);
}
