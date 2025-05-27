import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';
import { applyAppSettings } from './settings/apply-app-settings';
import { setupSwagger } from './settings/setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = app.get<CoreConfig>(CoreConfig);

  applyAppSettings(app);

  setupSwagger(app);

  await app.listen(appConfig.port);
}

bootstrap();
