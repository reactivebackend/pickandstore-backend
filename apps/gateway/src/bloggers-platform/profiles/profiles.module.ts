import { Module } from '@nestjs/common';
import { ProfileController } from './api/profiles.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { ProfilesRepository } from './infrastructure/profiles.repository';
import { ProfilesQueryRepository } from './infrastructure/query/profiles.query-repository';
import { UpdateUserProfileUseCase } from './application/usecases/update-user-profile.usecase';
import { UploadUserProfileAvatarUseCase } from './application/usecases/upload-user-profile-avatar.usecase';
import { DeleteUserProfileAvatarUseCase } from './application/usecases/delete-user-profile-avatar.usecase';
import { AppService } from '../../app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { configModule } from '../../../../../libs/config/config.module';
import { CoreConfig } from '../../../../../libs/config/core.config';
import { MulterModule } from '@nestjs/platform-express';
import { UsersRepository } from '../../user-accounts/infrastructure/users.repository';

const profileUseCases = [
  UpdateUserProfileUseCase,
  UploadUserProfileAvatarUseCase,
  DeleteUserProfileAvatarUseCase,
];

@Module({
  imports: [
    CqrsModule,
    MulterModule.register({
      limits: {
        fileSize: 10 * 1024 * 1024,
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
  controllers: [ProfileController],
  providers: [
    ProfilesRepository,
    ProfilesQueryRepository,
    UsersRepository,
    AppService,
    ...profileUseCases,
  ],
  exports: [],
})
export class ProfileModule {}
