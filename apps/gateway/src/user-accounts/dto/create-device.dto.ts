export class CreateDeviceDto {
  deviceId: string;
  ip: string;
  title: string;
  lastActiveDate: number;
  expirationDate: number;
  userId: number;
}
