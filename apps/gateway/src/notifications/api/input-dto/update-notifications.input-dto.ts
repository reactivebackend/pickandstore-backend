import { IsArray, IsNumber } from 'class-validator';

export class UpdateNotificationsInputDto {
  @IsArray()
  @IsNumber({}, { each: true })
  ids: Array<number>;
}
