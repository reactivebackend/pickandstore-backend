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
import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';
import { ExtractUserFromRequest } from '../guards/decorators/extract-user-id-from-request.decorator';
import { DevicesQueryRepository } from '../infrastructure/query/devices.query-repository';
import { ExtractDeviceFromCookie } from '../guards/decorators/extract-device-from-cookie.decorator';
import { TerminateAllOtherDevicesCommand } from '../application/usecases/devices/terminate-all-other-devices.usecase';
import { TerminateDeviceCommand } from '../application/usecases/devices/terminate-device.usecase';
import {
  GetAllDevicesDocs,
  TerminateAllOtherDevicesDocs,
  TerminateDeviceByIdDocs,
} from '../docs/devices.docs';

@Controller('security/devices')
export class DevicesController {
  constructor(
    private devicesQueryRepository: DevicesQueryRepository,
    private commandBus: CommandBus,
  ) {}

  @GetAllDevicesDocs()
  @UseGuards(JwtRefreshGuard)
  @Get()
  async getAllDevices(
    @ExtractUserFromRequest() userId: number,
  ): Promise<DeviceViewDto[]> {
    return this.devicesQueryRepository.getAllDevices(userId);
  }

  @TerminateAllOtherDevicesDocs()
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

  @TerminateDeviceByIdDocs()
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
