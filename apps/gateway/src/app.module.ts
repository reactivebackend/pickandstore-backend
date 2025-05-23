import { configModule } from '../../../libs/config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreConfig } from '../../../libs/config/core.config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { microserviceOptions } from '../../../libs/options/microserviceOptions';
import { FilesController } from '../../files/src/files.controller';
import { ConfigModule } from '@nestjs/config';
import { FilesService } from '../../files/src/files.service';

@Module({
  imports: [
    /*ConfigModule.forRoot({
      isGlobal: true,
    }),*/
    configModule,
  ],
  controllers: [AppController, FilesController],
  providers: [AppService, CoreConfig, FilesService],
  exports: [CoreConfig],
})
export class AppModule {}
