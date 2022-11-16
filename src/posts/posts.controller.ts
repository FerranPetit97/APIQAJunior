import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { PostsDataBase } from './posts.inteface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async findAll(): Promise<Record<number, PostsDataBase>> {
    return this.postsService.findAll();
  }

  @Post()
  async createOne(@Body() body: PostsDataBase) {
    return this.postsService.createOne(body);
  }

  @Get(':sorBy')
  async findAllOrdered(@Param('sorBy') sorBy: string) {
    return this.postsService.findAllOrdered(sorBy);
  }

  @Patch(':id')
  async updateOne(
    @Body() body: PostsDataBase,
    @Param('id') identificator: string,
  ) {
    return this.postsService.updateOne(identificator, body);
  }

  @Delete(':id')
  async deleteOne(@Param('id') identificador: string) {
    return this.postsService.deleteOne(identificador);
  }
}
