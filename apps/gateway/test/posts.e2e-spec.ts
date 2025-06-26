import { HttpStatus, INestApplication } from '@nestjs/common';
import { UsersTestManager } from './helpers/users-test-manager';
import { initSettings } from './helpers/init-settings';
import { clearDatabase } from './helpers/clear-database';
import { PostsTestManager } from './helpers/posts-test-manager';
import request from 'supertest';
import { GLOBAL_PREFIX } from '../../../libs/setup/global-prefix.setup';

describe('posts', () => {
  let app: INestApplication;
  let usersTestManager: UsersTestManager;
  let postsTestManager: PostsTestManager;

  beforeAll(async () => {
    const result = await initSettings();

    app = result.app;
    usersTestManager = result.usersTestManager;
    postsTestManager = result.postsTestManager;
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await clearDatabase();
  });

  it('should create a post without really save image', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const post = await postsTestManager.createPost(tokens[0].accessToken, {
      description: 'Test post',
    });

    expect(post).toHaveProperty('id');
    expect(post.description).toBe('Test post');
    expect(post.imageUrl.length).toBe(1);
  });

  it('should create post without description', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const post = await postsTestManager.createPost(tokens[0].accessToken);

    expect(post).toHaveProperty('id');
    expect(post.description).toBe(null);
    expect(post.imageUrl.length).toBe(1);
  });

  it('should fail to create a post with invalid image type', async () => {
    const invalidFileMock = {
      fieldname: 'images',
      originalname: 'test.gif',
      mimetype: 'image/gif',
      buffer: Buffer.from('fake image content'),
      size: 123,
    } as Express.Multer.File;

    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const errorsMessages = await postsTestManager.createPost(
      tokens[0].accessToken,
      { description: 'Test post' },
      [invalidFileMock],
      HttpStatus.BAD_REQUEST,
    );

    expect(errorsMessages).toStrictEqual({
      errorsMessages: [
        {
          message: `Invalid file type for ${invalidFileMock.originalname}. Only JPEG and PNG are allowed`,
          field: 'images',
        },
      ],
    });
  });

  it('should fail to create a post without images', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const errorsMessages = await postsTestManager.createPost(
      tokens[0].accessToken,
      { description: 'Test post without images' },
      [],
      HttpStatus.BAD_REQUEST,
    );

    expect(errorsMessages).toStrictEqual({
      errorsMessages: [
        {
          message: 'At least one image is required',
          field: 'images',
        },
      ],
    });
  });

  it('should fail to create a post if any image size is greater than 20MB', async () => {
    const tooLargeFileMock = {
      fieldname: 'images',
      originalname: 'large_image.jpg',
      mimetype: 'image/jpeg',
      buffer: Buffer.alloc(21 * 1024 * 1024),
      size: 21 * 1024 * 1024,
    } as Express.Multer.File;

    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    await postsTestManager.createPost(
      tokens[0].accessToken,
      { description: 'Post with too large image' },
      [tooLargeFileMock],
      HttpStatus.PAYLOAD_TOO_LARGE,
    );
  });

  it('should fail to create a post with more than 10 images', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const tooManyFilesMock: Express.Multer.File[] = Array.from(
      { length: 11 },
      (_, index) => ({
        fieldname: 'images',
        originalname: `test${index + 1}.jpg`,
        mimetype: 'image/jpeg',
        buffer: Buffer.from(`fake image content ${index + 1}`),
        size: 123,
      }),
    ) as Express.Multer.File[];

    await postsTestManager.createPost(
      tokens[0].accessToken,
      { description: 'Too many images' },
      tooManyFilesMock,
      HttpStatus.BAD_REQUEST,
    );
  });

  it('should get post by id', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const post = await postsTestManager.createPost(tokens[0].accessToken, {
      description: 'Another one',
    });
    const found = await postsTestManager.getPostById(
      post.id,
      tokens[0].accessToken,
    );

    expect(found.id).toBe(post.id);
    expect(found.description).toBe('Another one');
  });

  it('should return paginated user posts', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);
    const user = await usersTestManager.me(tokens[0].accessToken);

    for (let i = 1; i <= 4; i++) {
      await postsTestManager.createPost(tokens[0].accessToken, {
        description: `Post ${i}`,
      });
    }

    const result = await postsTestManager.getUserPosts(
      +user.userId,
      {
        pageNumber: 1,
        pageSize: 3,
      },
      tokens[0].accessToken,
    );

    expect(result.items.length).toBe(3);
    expect(result.totalCount).toBe(4);

    for (let i = 1; i < result.items.length; i++) {
      const prevDate = new Date(result.items[i - 1].createdAt);
      const currDate = new Date(result.items[i].createdAt);
      expect(prevDate.getTime()).toBeGreaterThanOrEqual(currDate.getTime());
    }
  });

  it('should update a post', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const post = await postsTestManager.createPost(tokens[0].accessToken, {
      description: 'To be updated',
    });

    await postsTestManager.updatePost(post.id, tokens[0].accessToken, {
      description: 'Updated',
    });

    const updated = await postsTestManager.getPostById(
      post.id,
      tokens[0].accessToken,
    );

    expect(updated.id).toBe(post.id);
    expect(updated.description).toBe('Updated');
  });

  it('should delete a post', async () => {
    const tokens = await usersTestManager.registerAndLoginSeveralUsers(1);

    const post = await postsTestManager.createPost(tokens[0].accessToken, {
      description: 'To delete',
    });
    await postsTestManager.deletePost(post.id, tokens[0].accessToken);

    await request(app.getHttpServer()).get(`/api/posts/${post.id}`).expect(404);
  });

  it('should return 401 when no access token', async () => {
    await request(app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/posts`)
      .send({ description: 'Unauthorized' })
      .expect(HttpStatus.UNAUTHORIZED);
  });
});
