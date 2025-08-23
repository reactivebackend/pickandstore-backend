import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CoreConfig } from '../../../libs/config/core.config';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(PaymentsModule);
  const coreConfig = appContext.get(CoreConfig);

  const app = await NestFactory.create(PaymentsModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: coreConfig.paymentsTcpPort,
    },
  });

  await app.startAllMicroservices();

  app.use(
    '/stripe/notification-hook',
    bodyParser.raw({ type: 'application/json' }),
  );

  await app.listen(coreConfig.paymentsHttpPort);
}
bootstrap();
