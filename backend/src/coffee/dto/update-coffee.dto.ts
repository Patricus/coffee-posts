import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  id: number;
  name: string;
  year: number;
  caffeine_content: number;
  caffeine_percentage: number;
  updated_at: Date;
}
