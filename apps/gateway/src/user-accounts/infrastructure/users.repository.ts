import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  DeletionStatus,
  Prisma,
  User,
  UserMetadata,
} from '../../../generated/prisma';
import { add } from 'date-fns';
import { RecoveryDataDto } from '../dto/udate-recovery.dto';

export type UserWithMetadata = Prisma.UserGetPayload<{
  include: { userMetadata: true };
}>;

export type AuthAccountWithUser = Prisma.AuthAccountGetPayload<{
  include: { user: true };
}>;

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(
    username: string,
    email: string,
    passwordHash?: string,
  ): Promise<User> {
    return this.prismaService.user.create({
      data: {
        username,
        email,
        passwordHash: passwordHash ?? null,
        userMetadata: {
          create: {},
        },
      },
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        email: email,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });
  }

  async getUserWithMetadataByEmail(
    email: string,
  ): Promise<UserWithMetadata | null> {
    return this.prismaService.user.findFirst({
      where: {
        email: email,
        deletionStatus: DeletionStatus.NotDeleted,
      },
      include: {
        userMetadata: true,
      },
    });
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        username: username,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });
  }

  async getUserByIdOrNotFoundFail(id: number): Promise<User> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateEmailConfirmationData(
    userId: number,
    confirmCode: string,
  ): Promise<void> {
    await this.prismaService.userMetadata.update({
      where: {
        userId: userId,
      },
      data: {
        emailConfirmationCode: confirmCode,
        emailConfirmationExpiration: add(new Date(), { minutes: 5 }),
      },
    });
  }

  async getUserByConfirmationCode(
    code: string,
  ): Promise<UserWithMetadata | null> {
    return this.prismaService.user.findFirst({
      where: {
        userMetadata: {
          emailConfirmationCode: code,
        },
      },
      include: {
        userMetadata: true,
      },
    });
  }

  async updateEmailConfirmationStatus(userId: number): Promise<void> {
    await this.prismaService.userMetadata.update({
      where: {
        userId: userId,
      },
      data: {
        isEmailConfirmed: true,
      },
    });
  }

  async getUserByUsernameOrEmail(
    usernameOrEmail: string,
  ): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });
  }

  async getUserAuthAccountByProviderAndProviderId(
    provider: string,
    providerId: string,
  ): Promise<AuthAccountWithUser | null> {
    return this.prismaService.authAccount.findUnique({
      where: {
        provider_providerId: {
          provider,
          providerId,
        },
      },
      include: { user: true },
    });
  }

  async createAuthAccountForUser(
    userId: number,
    provider: string,
    providerId: string,
  ): Promise<void> {
    await this.prismaService.authAccount.create({
      data: {
        provider,
        providerId,
        userId: userId,
      },
    });
  }

  async updateRecoveryDate(dto: RecoveryDataDto): Promise<void> {
    await this.prismaService.userMetadata.update({
      where: {
        userId: dto.userId,
      },
      data: {
        passwordRecoveryCode: dto.recoveryCode,
        passwordRecoveryExpiration: dto.expirationDate,
      },
    });
  }

  async getUserMetadataByPasswordRecoveryCode(
    code: string,
  ): Promise<UserMetadata | null> {
    return this.prismaService.userMetadata.findFirst({
      where: {
        passwordRecoveryCode: code,
      },
    });
  }

  async updatePasswordHash(userId: number, hash: string): Promise<void> {
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        passwordHash: hash,
      },
    });
  }
}
