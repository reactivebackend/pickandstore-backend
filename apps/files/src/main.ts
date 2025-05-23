import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from '../../gateway/src/app.module';

async function bootstrap() {
  /*const app = await NestFactory.create(FilesModule);
  await app.listen(process.env.port ?? 3001);*/
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 4001,
      },
    },
  );
  await app.listen();
}
bootstrap();
