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
import { SocketNotificationsService } from '../../sockets/notificationsSocket/socket-notifications.service';
import { CommandBus } from '@nestjs/cqrs';
import { DeletePostCommand } from '../../bloggers-platform/posts/application/usecases/delete-post.usecase';
import { DeleteNotificationCommand } from '../application/usecases/delete-notification.usecase';
import { UpdateNotificationsCommand } from '../application/usecases/update-notifications.usecase';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private socketNotificationsService: SocketNotificationsService,
    private commandBus: CommandBus,
  ) {}

  @Get('1')
  async getNotificationByProfile1(
    // @ExtractUserFromRequest() userId: number,
    @Query('cursor') cursor?: string,
  ): Promise<any> {
    ///return this.postsQueryRepository.getAllUserPosts(query, userId);
    await this.socketNotificationsService.sendSubscriptionExpiredNotification(
      '4',
      'dsfsf',
    );
    return '55555';
  }

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
