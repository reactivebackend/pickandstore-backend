import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  getHello(): string {
    return 'Hello World!';
  }
  sendMessage(message: string): string {
    return message;
  }
}
