import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { DeviceViewDto } from './view-dto/devices.view-dto';
import {
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';
import { ExtractUserFromRequest } from '../guards/decorators/extract-user-id-from-request.decorator';
import { DevicesQueryRepository } from '../infrastructure/query/devices.query-repository';
import { ExtractDeviceFromCookie } from '../guards/decorators/extract-device-from-cookie.decorator';
import { TerminateAllOtherDevicesCommand } from '../application/usecases/devices/terminate-all-other-devices.usecase';
import { TerminateDeviceCommand } from '../application/usecases/devices/terminate-device.usecase';

@Controller('security/devices')
export class DevicesController {
  constructor(
    private devicesQueryRepository: DevicesQueryRepository,
    private commandBus: CommandBus,
  ) {}

  @ApiOperation({
    summary: 'Returns all devices with active sessions for current user.',
  })
  @ApiOkResponse({
    description: 'Success..',
    type: DeviceViewDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized.',
  })
  @ApiCookieAuth('refreshToken')
  @UseGuards(JwtRefreshGuard)
  @Get()
  async getAllDevices(
    @ExtractUserFromRequest() userId: number,
  ): Promise<DeviceViewDto[]> {
    return this.devicesQueryRepository.getAllDevices(userId);
  }

  @ApiOperation({
    summary: `Terminate all other (exclude current) device's sessions.`,
  })
  @ApiNoContentResponse({
    description: 'No Content.',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized.',
  })
  @ApiCookieAuth('refreshToken')
  @UseGuards(JwtRefreshGuard)
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async terminateAllOtherDevices(
    @ExtractUserFromRequest() userId: number,
    @ExtractDeviceFromCookie() deviceId: string,
  ): Promise<void> {
    return this.commandBus.execute(
      new TerminateAllOtherDevicesCommand(userId, deviceId),
    );
  }

  @ApiOperation({
    summary: 'Terminate specified device session',
  })
  @ApiParam({
    name: 'id',
    description: 'Id of session that will be terminated.',
  })
  @ApiNoContentResponse({
    description: 'No Content.',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized.',
  })
  @ApiForbiddenResponse({
    description: 'If try to delete the deviceId of other user.',
  })
  @ApiNotFoundResponse({
    description: 'Not Found.',
  })
  @ApiCookieAuth('refreshToken')
  @UseGuards(JwtRefreshGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async terminateDeviceById(
    @ExtractUserFromRequest() userId: number,
    @Param('id') deviceId: string,
  ): Promise<void> {
    return this.commandBus.execute(
      new TerminateDeviceCommand(userId, deviceId),
    );
  }
}
