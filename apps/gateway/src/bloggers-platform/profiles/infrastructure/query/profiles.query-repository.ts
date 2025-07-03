import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../../../prisma/prisma.service';
import { ProfileViewDto } from '../../api/view-dto/profile.view-dto';
import { DeletionStatus } from '../../../../../generated/prisma';
import { ProfileAvatarViewDto } from '../../api/view-dto/profile-avatar.view-dto';

@Injectable()
export class ProfilesQueryRepository {
  constructor(private prismaService: PrismaService) {}

  async getUserProfileByUserIdOrNotFoundFail(
    userId: number,
  ): Promise<ProfileViewDto> {
    const profile = await this.prismaService.user.findUnique({
      where: {
        id: userId,
        deletionStatus: DeletionStatus.NotDeleted,
      },
      include: {
        userAvatars: {
          where: { deletionStatus: DeletionStatus.NotDeleted },
        },
      },
    });

    if (!profile) {
      throw new NotFoundException('Post not found');
    }

    return ProfileViewDto.mapToView(profile);
  }

  async getUserProfileAvatarByIdOrNotFoundFail(
    avatarId: number,
  ): Promise<ProfileAvatarViewDto> {
    const avatar = await this.prismaService.userAvatar.findUnique({
      where: {
        id: avatarId,
        deletionStatus: DeletionStatus.NotDeleted,
      },
    });

    if (!avatar) {
      throw new NotFoundException('Avatar not found');
    }

    return ProfileAvatarViewDto.mapToView(avatar);
  }
}
