import { AppModule } from '../../../src/app.module';
import { Test, TestingModule } from '@nestjs/testing';
//import * as request from 'supertest';
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { applyAppSettings } from '../../../src/settings/apply-app-settings';

describe('tests for endpoint /api/v1/auth/registration', () => {
  let app: INestApplication;

  const email = 'kawboy1@mail.ru';

  const username = 'dedBaraded1';

  const password = 'pasS9word1!';

  const isTermsAgreed = 'false';

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    applyAppSettings(app);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('registration  user', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/registration')
      .send({
        username,
        password,
        email,
        isTermsAgreed,
      });
    //.expect(204);

    console.log(res.body);
  });

  it('registration  user', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/v1/auth/registration')
      .send({
        username: '',
        password: '1',
        email: 'kawboy1',
        isTermsAgreed,
      });
    //.expect(204);

    console.log(res.body);
  });
});
