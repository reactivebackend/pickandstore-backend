import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('FILE_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }
  async testMessage() {
    try {
      const response = await this.client
        .send('test_message', {
          text: 'Hello from files-service',
        })
        .toPromise();

      console.log('Ответ:', response);
      return response.reply;
    } catch (error) {
      console.log(error);
    }
  }
}
