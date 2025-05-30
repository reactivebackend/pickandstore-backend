import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { JwtConfig } from '../../config/jwt.config';
import { UpdateDeviceDataCommand } from './devices/update-device-data.usecase';

export class RefreshTokenCommand {
  constructor(
    public userId: string,
    public deviceId: string,
    public ip: string,
    public userAgent: string,
  ) {}
}

@CommandHandler(RefreshTokenCommand)
export class RefreshTokenUseCase
  implements ICommandHandler<RefreshTokenCommand>
{
  constructor(
    private jwtService: JwtService,
    private jwtConfig: JwtConfig,
    private commandBus: CommandBus,
  ) {}

  async execute({ userId, deviceId, ip, userAgent }: RefreshTokenCommand) {
    const accessTokenPayload = { sub: userId };
    const refreshTokenPayload = {
      sub: userId,
      deviceId: deviceId,
    };

    const newAccessToken = this.jwtService.sign(accessTokenPayload, {
      secret: this.jwtConfig.accessTokenSecret,
      expiresIn: this.jwtConfig.accessTokenExpirationTime,
    });

    const newRefreshToken = this.jwtService.sign(refreshTokenPayload, {
      secret: this.jwtConfig.refreshTokenSecret,
      expiresIn: this.jwtConfig.refreshTokenExpirationTime,
    });

    await this.commandBus.execute(
      new UpdateDeviceDataCommand(newRefreshToken, ip, userAgent),
    );

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }
}
