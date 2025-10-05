import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UpdateNotificationsInputDto } from './input-dto/update-notifications.input-dto';
import { JwtBearerGuard } from '../../user-accounts/guards/jwt-bearer.guard';
import { ExtractUserFromRequest } from '../../user-accounts/guards/decorators/extract-user-id-from-request.decorator';
import { CommandBus } from '@nestjs/cqrs';
import { DeleteNotificationCommand } from '../application/usecases/delete-notification.usecase';
import { UpdateNotificationsCommand } from '../application/usecases/update-notifications.usecase';
import { NotificationViewDto } from './view-dto/notification.view-dto';
import { GetNotificationsQueryParams } from './input-dto/get-notifications-query-params';
import { NotificationsPaginatedViewDto } from './view-dto/notifications.paginated.view-dto';
import { NotificationsQueryRepository } from '../infrastructure/query/notifications.query-repository';
import {
  DeleteNotificationByIdDocs,
  GetNotificationByProfileDocs,
  UpdateNotificationsByIdDocs,
} from '../docs/notifications.docs';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private notificationsQueryRepository: NotificationsQueryRepository,
    private commandBus: CommandBus,
  ) {}
  @GetNotificationByProfileDocs()
  @UseGuards(JwtBearerGuard)
  @Get()
  async getNotificationByProfile(
    @ExtractUserFromRequest() userId: number,
    @Query() query: GetNotificationsQueryParams,
  ): Promise<NotificationsPaginatedViewDto<NotificationViewDto[]>> {
    return this.notificationsQueryRepository.getUserNotifications(
      query,
      userId,
    );
  }
  @UpdateNotificationsByIdDocs()
  @UseGuards(JwtBearerGuard)
  @Put('mark-as-read')
  @HttpCode(HttpStatus.NO_CONTENT)
  async markNotificationsAsRead(
    @ExtractUserFromRequest() userId: number,
    @Body() inputUpdateDto: UpdateNotificationsInputDto,
  ): Promise<void> {
    await this.commandBus.execute(
      new UpdateNotificationsCommand(userId, inputUpdateDto),
    );
  }
  @DeleteNotificationByIdDocs()
  @UseGuards(JwtBearerGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNotificationById(
    @Param('id') id: number,
    @ExtractUserFromRequest() userId: number,
  ): Promise<void> {
    await this.commandBus.execute(new DeleteNotificationCommand(id, userId));
  }
}
