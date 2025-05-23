import { Injectable } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @Client({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4001,
    },
  })
  private client: ClientProxy;
  getHello(): string {
    return 'Hello World!';
  }
  async testMessage() {
    try {
      const response = await this.client
        .send('test_message', {
          text: 'Hello from service-a',
        })
        .toPromise();

      console.log('Ответ:', response);
      return response.reply;
    } catch (error) {
      console.log(error);
    }
  }
}
