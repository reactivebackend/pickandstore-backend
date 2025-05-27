import { RegistrationInputDto } from '../../api/dto/registration.input-dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';
import { User } from '../../../../../generated/prisma';
import { UsersRepository } from '../../infrastructure/repository/user.repository';
import { ErrorObject } from '../../../../../../../libs/utils/error-object';
import { HashPassword } from '../../../../common/utils/hash-password';
import { v4 as uuidv4 } from 'uuid';
import { add } from 'date-fns';
import { EmailCreatorService } from '../../../../common/email/emai-creator-service';
import { EmailAdapter } from '../../../../common/email/email-adapter';

export class RegistrationUserUsecase {
  constructor(public registrationInputDto: RegistrationInputDto) {}
}

@CommandHandler(RegistrationUserUsecase)
@Injectable()
export class RegistrationUserHandler {
  constructor(
    protected usersRepository: UsersRepository,
    protected hashPassword: HashPassword,
    protected emailCreatorService: EmailCreatorService,
    protected emailAdapter: EmailAdapter,
  ) {}

  async execute(command: RegistrationUserUsecase) {
    const { password, username, email, isTermsAgreed } =
      command.registrationInputDto;

    const existUserName: User | null =
      await this.usersRepository.findUserByUserName(username);

    if (existUserName) {
      throw new BadRequestException(
        ErrorObject.createError(
          'User with this username is already registered',
          'username',
        ),
      );
    }

    const existEmail: User | null =
      await this.usersRepository.findUserByEmail(email);

    if (existEmail) {
      throw new BadRequestException(
        ErrorObject.createError(
          'User with this email is already registered',
          'email',
        ),
      );
    }

    const passwordHash = await this.hashPassword.generateHash(password);

    const confirmationCode = uuidv4();

    const newUser = {
      username,
      email,
      passwordHash,
      isTermsAgreed,
      confirmationCode,
      isConfirmed: false,
      createdAt: new Date(),
      expirationDate: add(new Date(), { hours: 1 }),
    };

    const letter =
      this.emailCreatorService.createRegistrationEmail(confirmationCode);

    try {
      const emailTitle = 'Подтверждение регистации';
      this.emailAdapter.sendEmail(email, letter, emailTitle);
    } catch (error) {
      console.log(
        'letter has not been sent to email. file:registration-user-command.ts',
        error,
      );
    }

    return await this.usersRepository.registrationUser(newUser);
  }
}
