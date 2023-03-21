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
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

type Order = 'asc' | 'desc';
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get('ping')
  Ping() {
    return { status: 'good' };
  }

  @Get()
  findAll(@Query('order') order: Order) {
    return this.postService.findAll(order);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Get('coffee/:search')
  findCoffee(@Param('search') search: string) {
    if (isNaN(+search)) {
      return this.postService.findCoffee(search);
    } else {
      return this.postService.findCoffee(+search);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    console.log('updatePostDto', id);
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
