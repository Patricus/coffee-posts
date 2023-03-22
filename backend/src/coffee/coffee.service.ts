import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Repository, DataSource } from 'typeorm';

type Order = 'asc' | 'desc';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    private dataSource: DataSource,
  ) {}

  async create(createCoffeeDto: CreateCoffeeDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(Coffee, createCoffeeDto);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      return { error };
    }
    await queryRunner.release();

    return createCoffeeDto;
  }

  async findAll() {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const coffees = await queryRunner.manager.find(Coffee, {
      order: {
        name: 'asc',
      },
    });

    await queryRunner.release();

    return coffees;
  }

  async findCoffee(name: string) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const coffees = await queryRunner.query(
      `SELECT * FROM coffee WHERE name ILike $1`,
      ['%' + name + '%'],
    );

    await queryRunner.release();

    return coffees;
  }

  async findOne(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const coffee = await queryRunner.manager.findOne(Coffee, {
      where: {
        id,
      },
    });

    await queryRunner.release();

    return coffee;
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.update(Coffee, id, updateCoffeeDto);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      return { error };
    }
    await queryRunner.release();

    return updateCoffeeDto;
  }

  async remove(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.delete(Coffee, id);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      return { error };
    }
    await queryRunner.release();

    return { id };
  }
}
