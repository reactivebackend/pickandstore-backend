import { configModule } from '../../../libs/config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreConfig } from '../../../libs/config/core.config';
import { FilesController } from '../../files/src/files.controller';
import { FilesService } from '../../files/src/files.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CoreModule } from '../../../libs/config/core.module';

@Module({
  imports: [
    configModule,
    CoreModule,
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
  controllers: [AppController, FilesController],
  providers: [AppService, CoreConfig, FilesService],
  exports: [CoreConfig],
})
export class AppModule {}
