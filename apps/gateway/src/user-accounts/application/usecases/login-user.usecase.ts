import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { JwtConfig } from '../../config/jwt.config';
import { CreateDeviceCommand } from './devices/create-device.usecase';

export class LoginUserCommand {
  constructor(
    public userId: string,
    public userAgent: string,
    public ip: string,
  ) {}
}

@CommandHandler(LoginUserCommand)
export class LoginUserUseCase implements ICommandHandler<LoginUserCommand> {
  constructor(
    private jwtService: JwtService,
    private jwtConfig: JwtConfig,
    private commandBus: CommandBus,
  ) {}

  async execute({
    userId,
    userAgent,
    ip,
  }: LoginUserCommand): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const accessTokenPayload = { sub: userId };
      const deviceId = randomUUID();

      const refreshTokenPayload = {
        sub: userId,
        deviceId: deviceId,
      };

      const accessToken = this.jwtService.sign(accessTokenPayload, {
        secret: this.jwtConfig.accessTokenSecret,
        expiresIn: this.jwtConfig.accessTokenExpirationTime,
      });

      const refreshToken = this.jwtService.sign(refreshTokenPayload, {
        secret: this.jwtConfig.refreshTokenSecret,
        expiresIn: this.jwtConfig.refreshTokenExpirationTime,
      });

      await this.commandBus.execute(
        new CreateDeviceCommand(refreshToken, ip, userAgent),
      );

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.error('Error in LoginUserUseCase:', error);
      throw error;
    }
  }
}
