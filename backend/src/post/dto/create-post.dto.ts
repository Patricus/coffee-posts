export class CreatePostDto {
  id: number;
  title: string;
  coffee_id: number;
  text: string;
  rating: number;
  created_at: Date;
  updated_at: Date;
}
