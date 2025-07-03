import { Test, TestingModuleBuilder } from '@nestjs/testing';
import { UsersTestManager } from './users-test-manager';
import { EmailServiceMock } from '../mock/email-service.mock';
import { AppModule } from '../../src/app.module';
import cookieParser from 'cookie-parser';
import { EmailService } from '../../src/notifications/email.service';
import { appSetup } from '../../../../libs/setup/app.setup';
import { AuthConfig } from '../../src/user-accounts/config/auth.config';
import { UsersRepository } from '../../src/user-accounts/infrastructure/users.repository';
import { DevicesTestManager } from './devices-test-manager';
import { PostsTestManager } from './posts-test-manager';
import { AppService } from '../../src/app.service';
import { FilesMicroserviceMock } from '../mock/files-microservice.mock';
import { ProfilesTestManager } from './profiles-test-manager';

export const initSettings = async (
  addSettingsToModuleBuilder?: (moduleBuilder: TestingModuleBuilder) => void,
) => {
  const testingModuleBuilder: TestingModuleBuilder = Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideProvider(EmailService)
    .useClass(EmailServiceMock)
    .overrideProvider(AppService)
    .useClass(FilesMicroserviceMock);

  if (addSettingsToModuleBuilder) {
    addSettingsToModuleBuilder(testingModuleBuilder);
  }

  const testingAppModule = await testingModuleBuilder.compile();

  const app = testingAppModule.createNestApplication();

  app.use(cookieParser());

  appSetup(app);

  await app.init();

  const httpServer = app.getHttpServer();
  const authConfig = app.get(AuthConfig);
  const usersRepository = app.get(UsersRepository);

  const usersTestManager = new UsersTestManager(
    app,
    authConfig,
    usersRepository,
  );
  const devicesTestManager = new DevicesTestManager(app, usersTestManager);
  const postsTestManager = new PostsTestManager(app);
  const profilesTestManager = new ProfilesTestManager(app);

  return {
    app,
    httpServer,
    usersTestManager,
    devicesTestManager,
    postsTestManager,
    profilesTestManager,
  };
};
