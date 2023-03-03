import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.PORT || 5432,
      username: process.env.DB_USERNAME || 'coffee_app',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'coffee_db',
      autoLoadEntities: true,
      synchronize: process.env.DEV ? true : false,
    }),
    CoffeeModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
