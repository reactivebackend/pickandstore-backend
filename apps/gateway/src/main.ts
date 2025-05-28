import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';
import { appSetup } from '../../../libs/setup/app.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = app.get<CoreConfig>(CoreConfig);

  appSetup(app);
  await app.listen(appConfig.port);
}

bootstrap();
