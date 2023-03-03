import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  id: number;
  title: string;
  coffee_id: number;
  text: string;
  rating: number;
  updated_at: Date;
}
