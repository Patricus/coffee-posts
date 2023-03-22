import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

type Order = 'asc' | 'desc';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post()
  create(@Body() CreateCoffeeDto: CreateCoffeeDto) {
    CreateCoffeeDto.caffeine_percentage = CreateCoffeeDto.caffeine_content / 6;
    return this.coffeeService.create(CreateCoffeeDto);
  }

  @Get('ping')
  Ping() {
    return { status: 'good' };
  }

  @Get()
  findAll() {
    return this.coffeeService.findAll();
  }

  @Get('search/:search')
  findCoffee(@Param('search') search: string) {
    return this.coffeeService.findCoffee(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (isNaN(+id)) {
      return { error: 'id must be a number' };
    }
    return this.coffeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    updateCoffeeDto.caffeine_percentage = updateCoffeeDto.caffeine_content / 6;
    return this.coffeeService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(+id);
  }
}
