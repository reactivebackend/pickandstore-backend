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
import { PostsQueryRepository } from './infrastructure/query/posts.query-repository';
import { UpdatePostUseCase } from './application/usecases/update-post.usecase';
import { DeletePostUseCase } from './application/usecases/delete-post.usecase';

const postUseCases = [CreatePostUseCase, UpdatePostUseCase, DeletePostUseCase];

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
  providers: [
    PostConfig,
    PostsRepository,
    PostsQueryRepository,
    AppService,
    ...postUseCases,
  ],
  exports: [PostConfig],
})
export class PostModule {}
