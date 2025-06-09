import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiCookieAuth,
  ApiNoContentResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiParam,
} from '@nestjs/swagger';
import { DeviceViewDto } from '../api/view-dto/devices.view-dto';

export function GetAllDevicesDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Returns all devices with active sessions for current user.',
    }),
    ApiOkResponse({
      description: 'Success.',
      type: DeviceViewDto,
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiCookieAuth('refreshToken'),
  );
}

export function TerminateAllOtherDevicesDocs() {
  return applyDecorators(
    ApiOperation({
      summary: `Terminate all other (exclude current) device's sessions.`,
    }),
    ApiNoContentResponse({
      description: 'No Content.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiCookieAuth('refreshToken'),
  );
}

export function TerminateDeviceByIdDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Terminate specified device session',
    }),
    ApiParam({
      name: 'id',
      description: 'Id of session that will be terminated.',
    }),
    ApiNoContentResponse({
      description: 'No Content.',
    }),
    ApiUnauthorizedResponse({
      description: 'Unauthorized.',
    }),
    ApiForbiddenResponse({
      description: 'If try to delete the deviceId of other user.',
    }),
    ApiNotFoundResponse({
      description: 'Not Found.',
    }),
    ApiCookieAuth('refreshToken'),
  );
}
