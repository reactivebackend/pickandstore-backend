import { HttpStatus, INestApplication } from '@nestjs/common';
import request from 'supertest';
import { UsersTestManager } from './users-test-manager';
import { UserViewDto } from '../../src/user-accounts/api/view-dto/users.view-dto';
import { GLOBAL_PREFIX } from '../../../../libs/setup/global-prefix.setup';

export class DevicesTestManager {
  constructor(
    private app: INestApplication,
    private usersTestManager: UsersTestManager,
  ) {}

  async login(
    usernameOrEmail: string,
    password: string,
    statusCode: number = HttpStatus.OK,
  ) {
    return await request(this.app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/auth/login`)
      .send({ usernameOrEmail: usernameOrEmail, password: password })
      .expect(statusCode);
  }

  async createLoginSeveralUsersAndExtractRefreshTokens(count: number) {
    const users = await this.usersTestManager.registerSeveralUsers(count);

    const loginPromises = users.map((user: UserViewDto) =>
      this.login(user.username, '123456789'),
    );

    const responses = await Promise.all(loginPromises);

    return responses.map((response) =>
      this.usersTestManager.extractRefreshToken(response),
    );
  }
}
