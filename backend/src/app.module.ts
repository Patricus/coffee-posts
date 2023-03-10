import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { PostModule } from './post/post.module';
import { dataSourceOptions } from '../db/data-source';
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), CoffeeModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
