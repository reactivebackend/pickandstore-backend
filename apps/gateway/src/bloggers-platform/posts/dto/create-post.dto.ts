export class CreatePostDto {
  userId: number;
  description?: string;
  imageUrl: Array<string>;
}
