import { User, UserAvatar } from '../../../../../generated/prisma';
import { ProfileAvatarViewDto } from './profile-avatar.view-dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProfileViewDto {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'john_doe' })
  username: string;

  @ApiProperty({ example: 'John', type: String, nullable: true })
  firstName: string | null;

  @ApiProperty({ example: 'Doe', type: String, nullable: true })
  lastName: string | null;

  @ApiProperty({
    example: '2000-06-25T15:42:00.000Z',
    type: Date,
    nullable: true,
  })
  dateOfBirth: Date | null;

  @ApiProperty({ example: 'Estonia', type: String, nullable: true })
  country: string | null;

  @ApiProperty({ example: 'Tallinn', type: String, nullable: true })
  city: string | null;

  @ApiProperty({ example: 'I love coding!', type: String, nullable: true })
  aboutMe: string | null;

  @ApiProperty({ type: () => ProfileAvatarViewDto, nullable: true })
  avatar: ProfileAvatarViewDto | null;

  @ApiProperty({ example: '2025-07-01T12:00:00.000Z', type: Date })
  createdAt: Date;

  static mapToView(
    profile: User & { userAvatars: UserAvatar[] },
  ): ProfileViewDto {
    const dto = new ProfileViewDto();

    dto.userId = profile.id;
    dto.username = profile.username;
    dto.firstName = profile.firstName;
    dto.lastName = profile.lastName;
    dto.dateOfBirth = profile.dateOfBirth;
    dto.country = profile.country;
    dto.city = profile.city;
    dto.aboutMe = profile.aboutMe;
    dto.createdAt = profile.createdAt;

    const latestAvatar = profile.userAvatars?.length
      ? profile.userAvatars.reduce((prev, curr) =>
          prev.createdAt > curr.createdAt ? prev : curr,
        )
      : null;

    if (!latestAvatar) {
      dto.avatar = null;
    } else {
      dto.avatar = {
        url: latestAvatar.avatarUrl,
        createdAt: latestAvatar.createdAt,
      };
    }

    return dto;
  }
}
