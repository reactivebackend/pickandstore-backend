import { CreatePostUseCase } from './application/usecases/create-post.usecase';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { configModule } from '../../../../../libs/config/config.module';
import { CoreConfig } from '../../../../../libs/config/core.config';
import { PostController } from './api/posts.controller';
import { PostConfig } from './config/post.config';
import { PostsRepository } from './infrastructure/posts.repository';
import { AppService } from '../../app.service';
import { CqrsModule } from '@nestjs/cqrs';

const postUseCases = [CreatePostUseCase];

@Module({
  imports: [
    CqrsModule,
    MulterModule.register({
      limits: {
        fileSize: 20 * 1024 * 1024,
      },
    }),
    ClientsModule.registerAsync([
      {
        name: 'FILE_SERVICE',
        imports: [configModule],
        inject: [CoreConfig],
        useFactory: (coreConfig: CoreConfig) => ({
          transport: Transport.TCP,
          options: {
            host: coreConfig.filesHost,
            port: coreConfig.filesPort,
          },
        }),
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostConfig, PostsRepository, AppService, ...postUseCases],
  exports: [PostConfig],
})
export class PostModule {}
