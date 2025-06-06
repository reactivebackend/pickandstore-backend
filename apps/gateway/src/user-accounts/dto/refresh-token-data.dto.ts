export class RefreshTokenDataDto {
  deviceId: string;
  sub: string;
  issuedAt: Date;
  expiresAt: Date;
}
