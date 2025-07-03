import { UserAvatar } from '../../../../../generated/prisma';
import { ApiProperty } from '@nestjs/swagger';

export class ProfileAvatarViewDto {
  @ApiProperty({
    example: 'https://cdn.example.com/avatars/user1.jpg',
    description: 'Public URL of the uploaded avatar',
  })
  url: string;

  @ApiProperty({
    example: '2025-07-01T12:00:00.000Z',
    type: Date,
    description: 'Upload date of avatar',
  })
  createdAt: Date;

  static mapToView(userAvatar: UserAvatar): ProfileAvatarViewDto {
    const dto = new ProfileAvatarViewDto();

    dto.url = userAvatar.avatarUrl;
    dto.createdAt = userAvatar.createdAt;

    return dto;
  }
}
