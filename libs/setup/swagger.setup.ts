import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GLOBAL_PREFIX } from './global-prefix.setup';

export function swaggerSetup(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Instagram API')
    .addBearerAuth()
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'refreshToken',
        in: 'cookie',
        description:
          'JWT refreshToken inside cookie. Must be correct, and must not expire',
      },
      'refreshToken',
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT Bearer token only',
      },
      'bearer',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(GLOBAL_PREFIX, app, document, {
    customSiteTitle: 'Instagram Swagger',
  });
}
