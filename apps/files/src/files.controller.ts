import { Controller, Get } from '@nestjs/common';
import { FilesService } from './files.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  getHello(): string {
    return this.filesService.getHello();
  }
  @EventPattern('test_message')
  handleMessage(data: any) {
    console.log('Получено сообщение:', data);
    return { reply: 'Ответ от files-service' };
  }
}
