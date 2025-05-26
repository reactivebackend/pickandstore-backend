import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';
import { applyAppSettings } from './settings/apply-app-settings';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  debugger;
  const appConfig = app.get<CoreConfig>(CoreConfig);

  applyAppSettings(app);
  debugger;
  await app.listen(appConfig.port);
  debugger;
}

bootstrap();
