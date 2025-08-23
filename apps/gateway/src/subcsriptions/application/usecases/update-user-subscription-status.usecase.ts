import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../../../user-accounts/infrastructure/users.repository';

export class UpdateUserSubscriptionStatusCommand {
  constructor(
    public userId: number,
    public hasActiveSubscription: boolean,
  ) {}
}

@CommandHandler(UpdateUserSubscriptionStatusCommand)
export class UpdateUserSubscriptionStatusUseCase
  implements ICommandHandler<UpdateUserSubscriptionStatusCommand>
{
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    hasActiveSubscription,
  }: UpdateUserSubscriptionStatusCommand): Promise<void> {
    await this.usersRepository.updateSubscriptionStatus(
      userId,
      hasActiveSubscription,
    );
  }
}
