import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { CoreConfig } from '../../../libs/config/core.config';
import { configModule } from '../../../libs/config/config.module';
import { YandexS3Service } from './yandexS3.service';
import { PostConfig } from '../../gateway/src/bloggers-platform/posts/config/post.config';

@Module({
  imports: [configModule],
  controllers: [FilesController],
  providers: [FilesService, CoreConfig, YandexS3Service, PostConfig],
  exports: [YandexS3Service],
})
export class FilesModule {}
