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

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(username: string, email: string, passwordHash: string) {
    return this.prismaService.user.create({
      data: {
        username,
        email,
        passwordHash,
        userMetadata: {
          create: {},
        },
      },
      include: {
        userMetadata: true,
      },
    });
  }

  async getUserByEmail(email: string): Promise<UserWithMetadata | null> {
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

  async getUserByIdOrNotFoundFail(id: string): Promise<User> {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: +id,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateEmailConfirmationData(
    userId: string,
    confirmCode: string,
  ): Promise<void> {
    await this.prismaService.userMetadata.update({
      where: {
        userId: +userId,
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

  async updateEmailConfirmationStatus(userId: string): Promise<void> {
    await this.prismaService.userMetadata.update({
      where: {
        userId: +userId,
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

  async findUserForPasswordUpdate(code: string): Promise<UserMetadata | null> {
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
