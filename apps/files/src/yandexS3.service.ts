import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { PostConfig } from '../../gateway/src/bloggers-platform/posts/config/post.config';
import * as path from 'node:path';

@Injectable()
export class YandexS3Service {
  private s3Client: S3Client;
  private bucketName: string;

  constructor(private postConfig: PostConfig) {
    this.s3Client = new S3Client({
      region: 'ru-central1',
      endpoint: 'https://storage.yandexcloud.net',
      credentials: {
        accessKeyId: this.postConfig.accessKeyId,
        secretAccessKey: this.postConfig.secretAccessKey,
      },
    });
    this.bucketName = 'pickandstore';
  }

  async uploadImage(fileBuffer: Buffer, filename: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: filename,
      Body: fileBuffer,
      ContentDisposition: 'inline',
      ContentType: this.getMimeType(filename),
    });
    await this.s3Client.send(command);

    return `https://storage.yandexcloud.net/${this.bucketName}/${filename}`;
  }

  private getMimeType(filename: string): string {
    const ext = path.extname(filename).toLowerCase();
    if (ext === '.png') return 'image/png';
    return 'image/jpeg';
  }
}
