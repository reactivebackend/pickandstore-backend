import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';
import { appSetup } from '../../../libs/setup/app.setup';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const appConfig = app.get<CoreConfig>(CoreConfig);

  appSetup(app);
  await app.listen(appConfig.port);
}

bootstrap();
