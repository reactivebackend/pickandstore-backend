import { HttpStatus, INestApplication } from '@nestjs/common';
import { UsersTestManager } from './helpers/users-test-manager';
import { ProfilesTestManager } from './helpers/profiles-test-manager';
import { initSettings } from './helpers/init-settings';
import { clearDatabase } from './helpers/clear-database';
import request from 'supertest';
import { GLOBAL_PREFIX } from '../../../libs/setup/global-prefix.setup';

describe('profiles', () => {
  let app: INestApplication;
  let usersTestManager: UsersTestManager;
  let profilesTestManager: ProfilesTestManager;

  beforeAll(async () => {
    const result = await initSettings();

    app = result.app;
    usersTestManager = result.usersTestManager;
    profilesTestManager = result.profilesTestManager;
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  it('should return user profile', async () => {
    const [token] = await usersTestManager.registerAndLoginSeveralUsers(1);
    const profile = await profilesTestManager.getProfile(token.accessToken);

    expect(profile).toEqual({
      userId: expect.any(Number),
      username: expect.any(String),
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      country: null,
      city: null,
      aboutMe: null,
      createdAt: expect.any(String),
      avatar: null,
    });
  });

  it('should update profile', async () => {
    const [token] = await usersTestManager.registerAndLoginSeveralUsers(1);
    await profilesTestManager.updateProfile(token.accessToken, {
      username: 'updatedUser',
      firstName: 'John',
      lastName: 'Doe',
      country: 'Estonia',
      aboutMe: 'Testing is fun',
      dateOfBirth: new Date('2001-01-01'),
    });

    const profile = await profilesTestManager.getProfile(token.accessToken);

    expect(profile.username).toBe('updatedUser');
    expect(profile.firstName).toBe('John');
    expect(profile.lastName).toBe('Doe');
    expect(profile.country).toBe('Estonia');
    expect(profile.aboutMe).toBe('Testing is fun');
    expect(new Date(profile.dateOfBirth).toISOString()).toBe(
      new Date('2001-01-01').toISOString(),
    );
  });

  it('should upload avatar', async () => {
    const [token] = await usersTestManager.registerAndLoginSeveralUsers(1);
    const avatar = await profilesTestManager.uploadAvatar(token.accessToken);

    expect(avatar).toHaveProperty('url');
    expect(avatar).toHaveProperty('createdAt');
  });

  it('should delete avatar successfully', async () => {
    const [token] = await usersTestManager.registerAndLoginSeveralUsers(1);
    const avatar = await profilesTestManager.uploadAvatar(token.accessToken);

    expect(avatar).toHaveProperty('url');
    expect(avatar).toHaveProperty('createdAt');

    await profilesTestManager.deleteAvatar(token.accessToken);

    const profile = await profilesTestManager.getProfile(token.accessToken);
    expect(profile.avatar).toBeNull();
  });

  it('should fail to upload avatar with wrong file type', async () => {
    const [token] = await usersTestManager.registerAndLoginSeveralUsers(1);
    const invalidAvatar = {
      fieldname: 'avatar',
      originalname: 'bad.gif',
      mimetype: 'image/gif',
      buffer: Buffer.from('bad image'),
      size: 123,
    } as Express.Multer.File;

    const response = await profilesTestManager.uploadAvatar(
      token.accessToken,
      invalidAvatar,
      HttpStatus.BAD_REQUEST,
    );

    expect(response).toStrictEqual({
      errorsMessages: [
        {
          message:
            'Invalid file type for bad.gif. Only JPEG and PNG are allowed',
          field: 'avatar',
        },
      ],
    });
  });

  it('should fail to upload avatar if file too large', async () => {
    const [token] = await usersTestManager.registerAndLoginSeveralUsers(1);
    const largeAvatar = {
      fieldname: 'avatar',
      originalname: 'huge.jpg',
      mimetype: 'image/jpeg',
      buffer: Buffer.alloc(11 * 1024 * 1024),
      size: 11 * 1024 * 1024,
    } as Express.Multer.File;

    await profilesTestManager.uploadAvatar(
      token.accessToken,
      largeAvatar,
      HttpStatus.PAYLOAD_TOO_LARGE,
    );
  });

  it('should fail to get profile without access token', async () => {
    await request(app.getHttpServer())
      .get(`/${GLOBAL_PREFIX}/users/profile`)
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('should fail when updating profile with existing username', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(2);

    const existingUsername = (await usersTestManager.me(tokens[1].accessToken))
      .username;

    const updateUserData = {
      username: existingUsername,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date('2001-01-01'),
    };

    const response = await profilesTestManager.updateProfile(
      tokens[0].accessToken,
      updateUserData,
      HttpStatus.BAD_REQUEST,
    );

    expect(response).toStrictEqual({
      errorsMessages: [
        {
          message: 'User with this username is already registered',
          field: 'username',
        },
      ],
    });
  });

  it('should return 404 when trying to delete avatar that does not exist', async () => {
    const [token] = await usersTestManager.registerAndLoginSeveralUsers(1);
    await profilesTestManager.deleteAvatar(
      token.accessToken,
      HttpStatus.NOT_FOUND,
    );
  });
});
