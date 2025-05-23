import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = app.get<CoreConfig>(CoreConfig);

  app.setGlobalPrefix('api/v1');
  await app.listen(appConfig.port);
}

bootstrap();
