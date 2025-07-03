import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { UpdateProfileDto } from '../dto/update-user-profile.dto';
import { DeletionStatus, User, UserAvatar } from '../../../../generated/prisma';

@Injectable()
export class ProfilesRepository {
  constructor(private prismaService: PrismaService) {}

  async updateUserProfileByUserId(
    userId: number,
    dto: UpdateProfileDto,
  ): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id: userId,
        deletionStatus: DeletionStatus.NotDeleted,
      },
      data: {
        username: dto.username,
        firstName: dto.firstName,
        lastName: dto.lastName,
        dateOfBirth: dto.dateOfBirth,
        country: dto.country,
        city: dto.city,
        aboutMe: dto.aboutMe,
      },
    });
  }

  async uploadUserProfileAvatarByUserId(
    userId: number,
    avatarUrl: string,
  ): Promise<UserAvatar> {
    return this.prismaService.userAvatar.create({
      data: {
        userId: userId,
        avatarUrl: avatarUrl,
      },
    });
  }

  async getUserAvatarByUserId(userId: number): Promise<UserAvatar | null> {
    return this.prismaService.userAvatar.findFirst({
      where: {
        userId: userId,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });
  }

  async getUserAvatarByUserIdOrNotFoundFail(
    userId: number,
  ): Promise<UserAvatar | null> {
    const avatar = await this.prismaService.userAvatar.findFirst({
      where: {
        userId: userId,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    if (!avatar) {
      throw new NotFoundException('Avatar not found');
    }

    return avatar;
  }

  async makeUserAvatarDeleted(id: number): Promise<void> {
    await this.prismaService.userAvatar.update({
      where: {
        id: id,
      },
      data: {
        deletionStatus: DeletionStatus.Deleted,
      },
    });
  }
}
