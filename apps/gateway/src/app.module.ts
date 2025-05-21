import { configModule } from '../../../libs/config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreConfig } from '../../../libs/config/core.config';

@Module({
  imports: [configModule],
  controllers: [AppController],
  providers: [AppService, CoreConfig],
  exports: [CoreConfig],
})
export class AppModule {}
