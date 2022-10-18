import { Controller, Get } from '@nestjs/common';

import { PostsDataBase } from './posts.inteface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async findAll(): Promise<Record<number, PostsDataBase>> {
    return this.postsService.findAll();
  }
}
