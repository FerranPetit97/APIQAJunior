import { Controller, Get, Query } from '@nestjs/common';

import { CommentsDataBase } from './comments.interface';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get()
  async findAll(): Promise<Record<number, CommentsDataBase>> {
    return this.commentsService.findAll();
  }

  @Get('pag')
  async findPaginated(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<{ total: number; data: CommentsDataBase[] }> {
    return this.commentsService.findPaginated(+offset, +limit);
  }
}
