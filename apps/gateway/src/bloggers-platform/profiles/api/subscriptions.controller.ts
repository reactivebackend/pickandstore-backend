import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { JwtBearerGuard } from '../../../user-accounts/guards/jwt-bearer.guard';
import { ExtractUserFromRequest } from '../../../user-accounts/guards/decorators/extract-user-id-from-request.decorator';
import { UpdateProfileInputDto } from './input-dto/update-profile.input-dto';
import { UpdateUserProfileCommand } from '../application/usecases/update-user-profile.usecase';
import { ProfileViewDto } from './view-dto/profile.view-dto';
import { ProfilesQueryRepository } from '../infrastructure/query/profiles.query-repository';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileAvatarViewDto } from './view-dto/profile-avatar.view-dto';
import { UploadUserProfileAvatarCommand } from '../application/usecases/upload-user-profile-avatar.usecase';
import { DeleteUserProfileAvatarCommand } from '../application/usecases/delete-user-profile-avatar.usecase';
import {
  DeleteUserProfileAvatarDocs,
  GetUserProfileDocs,
  UpdateUserProfileDocs,
  UploadUserProfileAvatarDocs,
} from '../docs/profiles.docs';

@Controller('subscriptions')
export class SubscriptionController {
  constructor() {}

  // Создание новой подписки через Stripe или PayPal
  @Post('create')
  async createSubscription(@Body() body) {
    const { userId, planName, paymentMethod } = body;

    // В реальности тут вызовы к Stripe/PayPal API и обработка платежа

    // Создаем новую подписку после успешной оплаты
    /* const newSub = await this.subService.createSubscription(
      userId,
      planName,
      paymentMethod,
      undefined,
      undefined,
      true, // включить автопродление по умолчанию для новой подписки
    );
*/
    return 'newSub';
  }
}
/*@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepo: Repository<Subscription>,
  ) {}

  async getCurrentSubscriptions(userId: number): Promise<Subscription[]> {
    return this.subscriptionRepo.find({
      where: { user: { id: userId } },
      order: { expireAt: 'DESC' },
    });
  }

  async createSubscription(
    userId: number,
    planName: string,
    paymentMethod: 'Stripe' | 'PayPal',
    startDate?: Date,
    durationDays?: number,
    autoRenewal?: boolean,
  ): Promise<Subscription> {
    // Получить текущие подписки пользователя
    const currentSubs = await this.getCurrentSubscriptions(userId);

    // Отключить autoRenewal у текущих активных подписок
    for (const sub of currentSubs) {
      if (sub.autoRenewal) {
        sub.autoRenewal = false;
        await this.subscriptionRepo.save(sub);
      }
    }

    const now = startDate || new Date();
    const expireAt = new Date(
      now.getTime() + (durationDays || 30) * 24 * 60 * 60 * 1000,
    );

    const newSub = this.subscriptionRepo.create({
      user: { id: userId },
      planName,
      expireAt,
      nextPaymentDate: expireAt, // или по логике
      autoRenewal,
      paymentMethod,
      isActive: true,
    });

    return this.subscriptionRepo.save(newSub);
  }

  async getNextSubscription(userId: number): Promise<Subscription | null> {
    const subs = await this.getCurrentSubscriptions(userId);
    // Предположим, что следующая подписка — это самая новая после текущей
    if (subs.length > 1) {
      return subs[1]; // в порядке убывания по expireAt
    }
    return null;
  }
}*/
