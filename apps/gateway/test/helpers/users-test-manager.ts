import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AuthConfig } from '../../src/user-accounts/config/auth.config';
import { CreateUserDto } from '../../src/user-accounts/dto/create-user.dto';
import { CreateUserInputDto } from '../../src/user-accounts/api/input-dto/users.input-dto';
import {
  MeViewDto,
  UserViewDto,
} from '../../src/user-accounts/api/view-dto/users.view-dto';
import { GLOBAL_PREFIX } from '../../../../libs/setup/global-prefix.setup';
import { UsersRepository } from '../../src/user-accounts/infrastructure/users.repository';

export class UsersTestManager {
  authUsername: string;
  authPassword: string;

  constructor(
    private app: INestApplication,
    private authConfig: AuthConfig,
    private usersRepository: UsersRepository,
  ) {
    this.authUsername = this.authConfig.authUsername;
    this.authPassword = this.authConfig.authPassword;
  }

  userData: CreateUserDto = {
    username: 'username',
    password: 'qwerty',
    email: 'email@email.em',
  };

  async registerUser(
    createModel: CreateUserInputDto = this.userData,
    statusCode: number = HttpStatus.NO_CONTENT,
    autoConfirm: boolean = false,
  ): Promise<UserViewDto> {
    const response = await request(this.app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/registration`)
      .send(createModel)
      .expect(statusCode);

    if (autoConfirm) {
      const user = await this.usersRepository.getUserByEmail(createModel.email);
      await request(this.app.getHttpServer())
        .post(`/${GLOBAL_PREFIX}/auth/registration-confirmation`)
        .send({ code: user?.userMetadata?.emailConfirmationCode })
        .expect(HttpStatus.NO_CONTENT);

      return {
        id: user!.id.toString(),
        username: user!.username,
        email: user!.email,
        createdAt: user!.createdAt,
      };
    }

    return response.body;
  }

  async login(
    usernameOrEmail: string,
    password: string,
    statusCode: number = HttpStatus.OK,
  ): Promise<{ accessToken: string }> {
    const response = await request(this.app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/login`)
      .send({ usernameOrEmail: usernameOrEmail, password: password })
      .expect(statusCode);

    return {
      accessToken: response.body.accessToken,
    };
  }

  async me(
    accessToken: string,
    statusCode: number = HttpStatus.OK,
  ): Promise<MeViewDto> {
    const response = await request(this.app.getHttpServer())
      .get(`/${GLOBAL_PREFIX}/auth/me`)
      .auth(accessToken, { type: 'bearer' })
      .expect(statusCode);

    return response.body;
  }

  async registerSeveralUsers(count: number): Promise<UserViewDto[]> {
    const usersPromises = [] as Promise<UserViewDto>[];

    for (let i = 0; i < count; ++i) {
      const response = this.registerUser(
        {
          username: `username` + i,
          email: `test${i}@gmail.com`,
          password: '123456789',
        },
        HttpStatus.NO_CONTENT,
        true,
      );
      usersPromises.push(response);
    }

    return Promise.all(usersPromises);
  }

  async registerAndLoginSeveralUsers(
    count: number,
  ): Promise<{ accessToken: string }[]> {
    const users = await this.registerSeveralUsers(count);

    const loginPromises = users.map((user: UserViewDto) =>
      this.login(user.email, '123456789'),
    );

    return await Promise.all(loginPromises);
  }

  extractRefreshToken(response: any): string {
    const cookies = response.headers['set-cookie'] as string[];
    const refreshTokenCookie = cookies.find((cookie) =>
      cookie.includes('refreshToken='),
    );

    if (!refreshTokenCookie) {
      throw new Error('Refresh token cookie not found');
    }

    return refreshTokenCookie.split(';')[0].split('=')[1];
  }
}
