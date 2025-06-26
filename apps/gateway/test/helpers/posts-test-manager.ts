import { INestApplication, HttpStatus } from '@nestjs/common';
import request from 'supertest';
import { GLOBAL_PREFIX } from '../../../../libs/setup/global-prefix.setup';
import { CreatePostInputDto } from '../../src/bloggers-platform/posts/api/input-dto/create-post.input-dto';
import { GetPostsQueryParams } from '../../src/bloggers-platform/posts/api/input-dto/get-posts-query-params';

export class PostsTestManager {
  constructor(private app: INestApplication) {}

  fileMock = {
    fieldname: 'images',
    originalname: 'test.jpg',
    mimetype: 'image/jpeg',
    buffer: Buffer.from('test image content'),
    size: 123,
  } as Express.Multer.File;

  async createPost(
    accessToken: string,
    postData: CreatePostInputDto = {},
    files: Express.Multer.File[] = [this.fileMock],
    statusCode: number = HttpStatus.CREATED,
  ) {
    const req = request(this.app.getHttpServer())
      .post(`/${GLOBAL_PREFIX}/posts`)
      .set('Authorization', `Bearer ${accessToken}`);

    if (postData.description !== undefined) {
      req.field('description', postData.description);
    }

    files.forEach((file) => {
      req.attach('images', file.buffer, file.originalname);
    });

    const response = await req.expect(statusCode);
    return response.body;
  }

  async getPostById(
    postId: number,
    accessToken: string,
    statusCode: number = HttpStatus.OK,
  ) {
    const response = await request(this.app.getHttpServer())
      .get(`/${GLOBAL_PREFIX}/posts/${postId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(statusCode);
    return response.body;
  }

  async getUserPosts(
    userId: number,
    query: Partial<GetPostsQueryParams> = {},
    accessToken: string,
    statusCode: number = HttpStatus.OK,
  ) {
    const response = await request(this.app.getHttpServer())
      .get(`/${GLOBAL_PREFIX}/posts/user/${userId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .query(query)
      .expect(statusCode);
    return response.body;
  }

  async updatePost(
    postId: number,
    accessToken: string,
    updateData: CreatePostInputDto,
    statusCode: number = HttpStatus.NO_CONTENT,
  ) {
    const response = await request(this.app.getHttpServer())
      .put(`/${GLOBAL_PREFIX}/posts/${postId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send(updateData)
      .expect(statusCode);
    return response.body;
  }

  async deletePost(
    postId: number,
    accessToken: string,
    statusCode: number = HttpStatus.NO_CONTENT,
  ) {
    await request(this.app.getHttpServer())
      .delete(`/${GLOBAL_PREFIX}/posts/${postId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(statusCode);
  }
}
