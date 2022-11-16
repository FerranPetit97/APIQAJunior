import { Injectable } from '@nestjs/common';
import { data } from './db/comments.js';
import { CommentsDataBase } from './comments.interface';

@Injectable()
export class CommentsService {
  findAll(): CommentsDataBase[] {
    return data;
  }
  findPaginated(
    offset: number,
    limit: number,
  ): { total: number; data: CommentsDataBase[] } {
    const dataFormated: CommentsDataBase[] = [];

    console.log();

    for (let i = offset; i <= limit + offset; i++) {
      dataFormated.push(data[i]);
    }

    return { total: data.length, data: dataFormated };
  }
}
