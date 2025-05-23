import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<CoreConfig>(CoreConfig);
  app.setGlobalPrefix('api/v1');
  await app.listen(appConfig.port);

  /*const microserviceApp =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP,
      options: microserviceOptions,
    });
  await microserviceApp.listen();
  console.log('Microservice is listening on port 4000');*/
}

bootstrap();
