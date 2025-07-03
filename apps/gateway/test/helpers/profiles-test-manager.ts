import { INestApplication, HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { GLOBAL_PREFIX } from '../../../../libs/setup/global-prefix.setup';
import { UpdateProfileInputDto } from '../../src/bloggers-platform/profiles/api/input-dto/update-profile.input-dto';

export class ProfilesTestManager {
  constructor(private app: INestApplication) {}

  avatarMock = {
    fieldname: 'avatar',
    originalname: 'avatar.jpg',
    mimetype: 'image/jpeg',
    buffer: Buffer.from('avatar image content'),
    size: 123,
  } as Express.Multer.File;

  async updateProfile(
    accessToken: string,
    updateData: UpdateProfileInputDto,
    statusCode: number = HttpStatus.NO_CONTENT,
  ) {
    const response = await request(this.app.getHttpServer())
      .put(`/${GLOBAL_PREFIX}/users/profile`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send(updateData)
      .expect(statusCode);

    return response.body;
  }

  async getProfile(accessToken: string, statusCode: number = HttpStatus.OK) {
    const response = await request(this.app.getHttpServer())
      .get(`/${GLOBAL_PREFIX}/users/profile`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(statusCode);

    return response.body;
  }

  async uploadAvatar(
    accessToken: string,
    file: Express.Multer.File = this.avatarMock,
    statusCode: number = HttpStatus.CREATED,
  ) {
    const response = await request(this.app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/users/profile/avatar`)
      .set('Authorization', `Bearer ${accessToken}`)
      .attach('avatar', file.buffer, file.originalname)
      .expect(statusCode);

    return response.body;
  }

  async deleteAvatar(
    accessToken: string,
    statusCode: number = HttpStatus.NO_CONTENT,
  ) {
    await request(this.app.getHttpServer())
      .delete(`/${GLOBAL_PREFIX}/users/profile/avatar`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(statusCode);
  }
}
