import { CreateUserDto } from '../../dto/create-user.dto';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CryptoService } from '../crypto.service';
import { UsersRepository } from '../../infrastructure/users.repository';
import { BadRequestDomainException } from '../../../../../../libs/exceptions/domain-exceptions';

export class CreateUserCommand {
  constructor(public dto: CreateUserDto) {}
}

@CommandHandler(CreateUserCommand)
export class CreateUserUseCase implements ICommandHandler<CreateUserCommand> {
  constructor(
    private usersRepository: UsersRepository,
    private cryptoService: CryptoService,
  ) {}

  async execute({ dto }: CreateUserCommand): Promise<number> {
    const userWithTheSameUsername =
      await this.usersRepository.getUserByUsername(dto.username);

    if (userWithTheSameUsername) {
      throw BadRequestDomainException.create(
        'User with this username is already registered',
        'username',
      );
    }

    const userWithTheSameEmail = await this.usersRepository.getUserByEmail(
      dto.email,
    );

    if (userWithTheSameEmail) {
      throw BadRequestDomainException.create(
        'User with this email is already registered',
        'email',
      );
    }

    const passwordHash = await this.cryptoService.createPasswordHash(
      dto.password,
    );

    const user = await this.usersRepository.createUser(
      dto.username,
      dto.email,
      passwordHash,
    );

    return user.id;
  }
}
