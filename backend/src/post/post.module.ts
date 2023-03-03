import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [
    PostService,
    {
      provide: getRepositoryToken(Post),
      useValue: {}, // Mocking the repository -- TODO: create a mock repository
    },
  ],
})
export class PostModule {}
