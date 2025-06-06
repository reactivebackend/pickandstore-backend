import { Injectable } from '@nestjs/common';
import { MeViewDto } from '../../api/view-dto/users.view-dto';
import { UsersRepository } from '../users.repository';

@Injectable()
export class UsersQueryRepository {
  constructor(private usersRepository: UsersRepository) {}

  async getUserProfile(userId: number): Promise<MeViewDto> {
    const user = await this.usersRepository.getUserByIdOrNotFoundFail(userId);

    return MeViewDto.mapToView(user);
  }
}
