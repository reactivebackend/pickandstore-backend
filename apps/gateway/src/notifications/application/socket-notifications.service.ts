import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { JwtConfig } from '../../user-accounts/config/jwt.config';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'notifications',
})
export class SocketNotificationsService
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly jwtService: JwtService,
    private readonly jwtConfig: JwtConfig,
  ) {}
  @WebSocketServer()
  server: Server;
  private connectedUsers = new Map<string, Socket>();

  handleConnection(client: Socket): any {
    const token = client.handshake.query.token as string;
    if (!token) {
      client.disconnect();
      return;
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: this.jwtConfig.accessTokenSecret,
      });
      const id = String(payload.sub);
      client.join(id);
      this.connectedUsers.set(id, client);
      console.log(`User connected: ${id}`);
    } catch (err) {
      console.log('Invalid token. Disconnecting client...');
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket): any {
    for (const [userId, socket] of this.connectedUsers.entries()) {
      if (socket.id === client.id) {
        this.connectedUsers.delete(userId);
        console.log(`User disconnected: ${userId}`);
        break;
      }
    }
  }

  sendNotification(userId: number, message: string) {
    const client = this.connectedUsers.get(userId.toString());
    if (client) {
      this.server.to(userId.toString()).emit('NOTIFICATION', {
        userId: userId,
        message: message,
        notifyAt: new Date().toISOString(),
      });
    }
  }
}
