import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository, DataSource } from 'typeorm';

type Order = 'asc' | 'desc';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private dataSource: DataSource,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(Post, createPostDto);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      return { error };
    }
    await queryRunner.release();

    return createPostDto;
  }

  async findAll(order: Order = 'asc') {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const posts = await queryRunner.manager.find(Post, {
      relations: ['coffee'],
      order: {
        title: order,
      },
    });

    await queryRunner.release();

    return posts;
  }

  async findOne(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const post = await queryRunner.manager.findOne(Post, {
      relations: ['coffee'],
      where: {
        id,
      },
    });

    await queryRunner.release();

    return post;
  }

  async findCoffee(search: number | string) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const where = (() => {
      if (typeof search === 'number') {
        return { coffee: { id: search } };
      } else {
        return { coffee: { name: search } };
      }
    })();
    const post = await queryRunner.manager.find(Post, {
      relations: { coffee: true },
      where,
    });
    await queryRunner.release();

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.update(Post, id, updatePostDto);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      return { error };
    }
    await queryRunner.release();

    return updatePostDto;
  }

  async remove(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.delete(Post, id);
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
