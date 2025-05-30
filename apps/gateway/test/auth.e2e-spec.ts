import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { initSettings } from './helpers/init-settings';
import { UsersTestManager } from './helpers/users-test-manager';
import { CreateUserDto } from '../src/user-accounts/dto/create-user.dto';
import { GLOBAL_PREFIX } from '../../../libs/setup/global-prefix.setup';
import { MeViewDto } from '../src/user-accounts/api/view-dto/users.view-dto';
import { delay } from './helpers/delay';
import { EmailService } from '../src/notifications/email.service';
import { clearDatabase } from './helpers/clear-database';

describe('auth', () => {
  let app: INestApplication;
  let usersTestManager: UsersTestManager;

  beforeAll(async () => {
    const result = await initSettings();
    app = result.app;
    usersTestManager = result.usersTestManager;
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  it('shouldn`t register user with non-unique email', async () => {
    const firstUser: CreateUserDto = {
      username: 'firstUser',
      password: 'password1',
      email: 'firstUser@gmail.com',
    };
    const secondUser: CreateUserDto = {
      username: 'secondUser',
      password: 'password2',
      email: 'firstUser@gmail.com',
    };

    await usersTestManager.registerUser(firstUser, HttpStatus.NO_CONTENT, true);

    const errorsMessages = await usersTestManager.registerUser(
      secondUser,
      HttpStatus.BAD_REQUEST,
    );

    expect(errorsMessages).toStrictEqual({
      errorsMessages: [
        {
          message: 'User with this email is already registered',
          field: 'email',
        },
      ],
    });
  });

  it('shouldn`t register user with non-unique username', async () => {
    const firstUser = {
      username: 'firstUser',
      password: 'password1',
      email: 'firstUser@gmail.com',
    };
    const secondUser = {
      username: 'firstUser',
      password: 'password2',
      email: 'secondUser@gmail.com',
    };

    await usersTestManager.registerUser(firstUser);

    const errorsMessages = await usersTestManager.registerUser(
      secondUser,
      HttpStatus.BAD_REQUEST,
    );

    expect(errorsMessages).toStrictEqual({
      errorsMessages: [
        {
          message: 'User with this username is already registered',
          field: 'username',
        },
      ],
    });
  });

  it('should return users info while "me" request with correct accessTokens', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const responseBody = await usersTestManager.me(tokens[0].accessToken);

    expect(responseBody).toEqual({
      username: expect.anything(),
      userId: expect.anything(),
      email: expect.anything(),
    } as MeViewDto);
  });

  it(`shouldn't return users info while "me" request if accessTokens expired`, async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);
    await delay(2000);
    await usersTestManager.me(tokens[0].accessToken, HttpStatus.UNAUTHORIZED);
  });

  it('should get new accessToken and refreshToken', async () => {
    const userData = {
      username: 'Madrid',
      password: 'password1',
      email: 'madrid@gmail.com',
    };

    await usersTestManager.registerUser(userData);

    const authDataWithUsername = {
      usernameOrEmail: 'Madrid',
      password: 'password1',
    };

    const response = await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/login`)
      .send(authDataWithUsername)
      .expect(HttpStatus.OK);

    const refreshToken = usersTestManager.extractRefreshToken(response);
    const accessToken = response.body.accessToken;

    await delay(1000);

    const newResponse = await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/refresh-token`)
      .set('Cookie', `refreshToken=${refreshToken}`)
      .expect(HttpStatus.OK);

    const newRefreshToken = usersTestManager.extractRefreshToken(newResponse);
    const newAccessToken = newResponse.body.accessToken;

    // Проверяем, что токены обновились
    expect(refreshToken).not.toBe(newRefreshToken);
    expect(accessToken).not.toBe(newAccessToken);
  });

  it(`should register user without really send email`, async () => {
    await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/registration`)
      .send({
        email: 'email@email.em',
        password: '123123123',
        username: 'username123',
      } as CreateUserDto)
      .expect(HttpStatus.NO_CONTENT);
  });

  it(`should call email sending method while registration`, async () => {
    const sendEmailMethod = (app.get(EmailService).sendConfirmationEmail = jest
      .fn()
      .mockImplementation(() => Promise.resolve()));

    await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/registration`)
      .send({
        email: 'email3@email.em',
        password: '123123123',
        username: 'username1233',
      } as CreateUserDto)
      .expect(HttpStatus.NO_CONTENT);

    expect(sendEmailMethod).toHaveBeenCalled();
  });

  it('shouldn`t authenticate with incorrect data', async () => {
    const randomAuthData = {
      usernameOrEmail: 'Bezgoev',
      password: 'qwerty',
    };

    await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/login`)
      .send(randomAuthData)
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('should authenticate with correct data', async () => {
    const userData = {
      username: 'Artur33',
      password: 'password1',
      email: 'bezgoev@gmail.com',
    };

    await usersTestManager.registerUser(userData);

    const authDataWithUsername = {
      usernameOrEmail: 'Artur33',
      password: 'password1',
    };

    const authDataWithEmail = {
      usernameOrEmail: 'bezgoev@gmail.com',
      password: 'password1',
    };

    await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/login`)
      .send(authDataWithUsername)
      .expect(HttpStatus.OK);

    await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/login`)
      .send(authDataWithEmail)
      .expect(HttpStatus.OK);
  });
});
