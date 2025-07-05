export class UpdateProfileDto {
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  country?: string;
  city?: string;
  aboutMe?: string;
}
