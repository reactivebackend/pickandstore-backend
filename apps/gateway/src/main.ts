import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CoreConfig } from '../../../libs/config/core.config';
import { appSetup } from '../../../libs/setup/app.setup';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<CoreConfig>(CoreConfig);
  const allowedOrigins = ['http://localhost:3000', 'https://pickandstore.com'];

  app.use(cookieParser());
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  });
  app.getHttpAdapter().getInstance().set('trust proxy', 1);
  appSetup(app);
  await app.listen(appConfig.port);
}

bootstrap();
