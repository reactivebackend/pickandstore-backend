import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CoreConfig } from '../../../libs/config/core.config';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(PaymentsModule);
  const coreConfig = appContext.get(CoreConfig);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentsModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: coreConfig.paymentsPort,
      },
    },
  );

  await app.listen();
}

bootstrap();
