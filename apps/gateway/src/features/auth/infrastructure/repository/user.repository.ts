import { Injectable } from '@nestjs/common';
import { User } from '../../../../../generated/prisma';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { CoreConfig } from '../../../../../../../libs/config/core.config';

@Injectable()
export class UsersRepository {
  constructor(
    private readonly prisma: PrismaService,
    private coreConfig: CoreConfig,
  ) {}

  async findUserByUserName(username: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { username },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  async registrationUser(newUser: any): Promise<User> {
    return this.prisma.user.create({
      data: { ...newUser },
    });
  }
}
