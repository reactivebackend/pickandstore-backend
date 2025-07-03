import { AppService } from '../../src/app.service';

export class FilesMicroserviceMock extends AppService {
  async sendImages(files: Array<Express.Multer.File>) {
    console.log('Call mock method sendPhoto / FilesMicroserviceMock');
    return files.map((file, i) => `http://mocked.url/image-${i}.jpg`);
  }

  async sendAvatar(avatar: Express.Multer.File) {
    console.log('Call mock method sendAvatar / FilesMicroserviceMock');
    return `http://mocked.url/${avatar.originalname}`;
  }
}
