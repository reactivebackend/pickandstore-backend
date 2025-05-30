import { OmitType } from '@nestjs/swagger';
import { User } from '../../../../generated/prisma';

export class UserViewDto {
  id: string;
  username: string;
  email: string;
  createdAt: Date;

  static mapToView(user: User): UserViewDto {
    const dto = new UserViewDto();

    dto.email = user.email;
    dto.username = user.username;
    dto.id = user.id.toString();
    dto.createdAt = user.createdAt;

    return dto;
  }
}

export class MeViewDto extends OmitType(UserViewDto, [
  'createdAt',
  'id',
] as const) {
  userId: string;

  static mapToView(user: User): MeViewDto {
    const dto = new MeViewDto();

    dto.email = user.email;
    dto.username = user.username;
    dto.userId = user.id.toString();

    return dto;
  }
}
