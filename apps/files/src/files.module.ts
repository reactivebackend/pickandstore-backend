import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { CoreConfig } from '../../../libs/config/core.config';
import { configModule } from '../../../libs/config/config.module';

@Module({
  imports: [configModule],
  controllers: [FilesController],
  providers: [FilesService, CoreConfig],
})
export class FilesModule {}
