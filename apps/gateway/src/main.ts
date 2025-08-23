import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';
import { appSetup } from '../../../libs/setup/app.setup';
import cookieParser from 'cookie-parser';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  const appConfig = app.get<CoreConfig>(CoreConfig);

  app.use(cookieParser());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://pickandstore.com',
      'https://dev.pickandstore.com',
    ],
    credentials: true,
  });
  app.getHttpAdapter().getInstance().set('trust proxy', 1);
  appSetup(app);
  await app.listen(appConfig.port);
}

bootstrap();
