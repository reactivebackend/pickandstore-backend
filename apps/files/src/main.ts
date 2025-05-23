import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { FilesModule } from './files.module';
import { CoreConfig } from '../../../libs/config/core.config';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(FilesModule);
  const coreConfig = appContext.get(CoreConfig);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FilesModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: coreConfig.filesPort,
      },
    },
  );

  await app.listen();
}

bootstrap();
