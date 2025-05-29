import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infrastructure/users.repository';
import { CryptoService } from './crypto.service';
import { User } from '../../../generated/prisma';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDataDto } from '../dto/refresh-token-data.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private cryptoService: CryptoService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    usernameOrEmail: string,
    password: string,
  ): Promise<User | null> {
    const user =
      await this.usersRepository.getUserByUsernameOrEmail(usernameOrEmail);

    if (!user) {
      return null;
    }

    const isPasswordValid = await this.cryptoService.comparePasswords({
      password,
      hash: user.passwordHash,
    });

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async getRefreshTokenData(
    refreshToken: string,
  ): Promise<RefreshTokenDataDto> {
    const decoded: any = this.jwtService.decode(refreshToken);

    if (!decoded) {
      throw new Error('Invalid or malformed refresh token');
    }

    return {
      deviceId: decoded.deviceId,
      sub: decoded.sub,
      issuedAt: decoded.iat,
      expiresAt: decoded.exp,
    };
  }
}
