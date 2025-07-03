import { Controller, Get } from '@nestjs/common';
import { FilesService } from './files.service';
import { EventPattern } from '@nestjs/microservices';
import { YandexS3Service } from './yandexS3.service';

@Controller()
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly yandexS3Service: YandexS3Service,
  ) {}

  @Get()
  getHello(): string {
    return this.filesService.getHello();
  }

  @EventPattern('test_message')
  handleMessage(data: any) {
    console.log('Получено сообщение:', data);
    return { reply: 'Ответ от files-service' };
  }

  @EventPattern('send_images')
  async saveImages(
    data: Array<{
      fileData: string;
      filename: string;
    }>,
  ): Promise<Array<string>> {
    return Promise.all(
      data.map(async (f) => {
        const file = Buffer.from(f.fileData, 'base64');
        return await this.yandexS3Service.uploadImage(file, f.filename);
      }),
    );
  }

  @EventPattern('send_avatar')
  async saveAvatar(data: {
    fileData: string;
    filename: string;
  }): Promise<string> {
    const file = Buffer.from(data.fileData, 'base64');
    return await this.yandexS3Service.uploadImage(file, data.filename);
  }
}
