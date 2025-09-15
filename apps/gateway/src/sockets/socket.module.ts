import { Module } from '@nestjs/common';
import { SocketNotificationsService } from './notificationsSocket/socket-notifications.service';
import { JwtWsStrategy } from '../user-accounts/strategies/jwt.ws.strategy';
import { JwtConfig } from '../user-accounts/config/jwt.config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [],
  providers: [SocketNotificationsService, JwtWsStrategy, JwtConfig, JwtService],
})
export class SocketModule {}
