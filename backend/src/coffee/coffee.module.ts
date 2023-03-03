import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffeeController],
  providers: [
    CoffeeService,
    {
      provide: getRepositoryToken(Coffee),
      useValue: {}, // Mocking the repository -- TODO: create a mock repository
    },
  ],
})
export class CoffeeModule {}
