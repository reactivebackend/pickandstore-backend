import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { NotificationViewDto } from '../api/view-dto/notification.view-dto';

export function GetNotificationByProfileDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Return notifications by profile.' }),
    ApiOkResponse({
      description: 'The post has been successfully found.',
      type: NotificationViewDto,
    }),

    ApiBearerAuth('bearer'),
  );
}

export function DeleteNotificationByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete notification by id.' }),
    ApiNoContentResponse({ description: 'Notification deleted successfully.' }),
    ApiBadRequestResponse({
      description: `Trying to delete another user's notification.`,
    }),
    ApiNotFoundResponse({
      description: 'Notification not found.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBearerAuth('bearer'),
  );
}

export function UpdateNotificationsByIdDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Mark notifications as read ' }),
    ApiNoContentResponse({
      description: 'The fields for the specified ids were successfully updated',
    }),
    ApiProperty({
      description: 'The inputModel has incorrect values',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiBearerAuth('bearer'),
  );
}
