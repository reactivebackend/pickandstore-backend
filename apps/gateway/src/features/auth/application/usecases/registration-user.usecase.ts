import { RegistrationInputDto } from '../../api/dto/registration.input-dto';
import { Injectable } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';
import { User } from '../../../../../generated/prisma';

export class RegistrationUserUsecase {
  constructor(public registrationInputDto: RegistrationInputDto) {}
}
@CommandHandler(RegistrationUserUsecase)
@Injectable()
export class RegistrationUserHandler {
  constructor() // protected readonly configService: PlatformConfigService, // protected emailAdapter: EmailAdapter, //protected emailCreatorService: EmailCreatorService, //protected hashPassword: HashPassword, //protected usersRepository: UsersRepository,
  {}

  async execute(command: RegistrationUserUsecase) {
    const { password, username, email, isTermsAgreed } =
      command.registrationInputDto;

    const existUserName: User | null =
      await this.usersRepository.findUserByUserName(username);

    return { jjjj: 'lkjiuoiudlkfj' };
  }
}
