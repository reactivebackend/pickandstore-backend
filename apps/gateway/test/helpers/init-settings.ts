import { Test, TestingModuleBuilder } from '@nestjs/testing';
import { UsersTestManager } from './users-test-manager';
import { EmailServiceMock } from '../mock/email-service.mock';
import { AppModule } from '../../src/app.module';
import cookieParser from 'cookie-parser';
import { EmailService } from '../../src/notifications/email.service';
import { appSetup } from '../../../../libs/setup/app.setup';
import { AuthConfig } from '../../src/user-accounts/config/auth.config';
import { UsersRepository } from '../../src/user-accounts/infrastructure/users.repository';

export const initSettings = async (
  addSettingsToModuleBuilder?: (moduleBuilder: TestingModuleBuilder) => void,
) => {
  const testingModuleBuilder: TestingModuleBuilder = Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideProvider(EmailService)
    .useClass(EmailServiceMock);

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

  return {
    app,
    httpServer,
    usersTestManager,
  };
};
