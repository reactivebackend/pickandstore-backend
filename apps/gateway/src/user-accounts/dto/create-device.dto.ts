export class CreateDeviceDto {
  id: string;
  userId: number;
  ip: string;
  title: string;
  lastActiveDate: Date;
  expirationDate: Date;
}
