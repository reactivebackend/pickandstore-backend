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

    if (!user || !user.passwordHash) {
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

  getRefreshTokenData(refreshToken: string): RefreshTokenDataDto {
    const decoded: any = this.jwtService.decode(refreshToken);

    if (!decoded) {
      throw new Error('Invalid or malformed refresh token');
    }

    return {
      deviceId: decoded.deviceId,
      sub: decoded.sub,
      issuedAt: new Date(decoded.iat * 1000),
      expiresAt: new Date(decoded.exp * 1000),
    };
  }

  async validateOAuthLogin(profile: any, provider: 'google' | 'github') {
    const providerId = profile.id;
    const email = profile.emails?.[0]?.value;

    const account =
      await this.usersRepository.getUserAuthAccountByProviderAndProviderId(
        provider,
        providerId,
      );

    if (account) return account.user;

    let user = await this.usersRepository.getUserByEmail(email);

    if (!user) {
      let username: string;

      if (provider === 'github') {
        username = profile.username;
      } else {
        username = profile.displayName;
      }

      user = await this.usersRepository.createUser(username, email);
      await this.usersRepository.updateEmailConfirmationStatus(user.id);
    }

    await this.usersRepository.createAuthAccountForUser(
      user.id,
      provider,
      providerId,
    );

    return user;
  }
}
