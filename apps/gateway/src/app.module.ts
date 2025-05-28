import { configModule } from '../../../libs/config/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreConfig } from '../../../libs/config/core.config';
import { FilesController } from '../../files/src/files.controller';
import { FilesService } from '../../files/src/files.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CoreModule } from '../../../libs/config/core.module';
import { EmailModule } from './notifications/email.module';
import { UserModule } from './user-accounts/user-accounts.module';
import { AllExceptionsFilter } from '../../../libs/exceptions/filters/all-exceptions-filter';

@Module({
  imports: [
    configModule,
    CoreModule,
    EmailModule,
    UserModule,
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
  providers: [AppService, CoreConfig, FilesService, AllExceptionsFilter],
  exports: [CoreConfig],
})
export class AppModule {}
