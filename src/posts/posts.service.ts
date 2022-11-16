import { Injectable, PreconditionFailedException } from '@nestjs/common';

import { data } from './db/users.js';
import { PostsDataBase } from './posts.inteface';

enum sortOrder {
  asc = 'asc',
  desc = 'desc',
  otro = 'otro',
}
@Injectable()
export class PostsService {
  findAll(): PostsDataBase[] {
    return data;
  }
  createOne(body): PostsDataBase[] {
    const newUser: PostsDataBase = {
      id: `${data.length + 1}`,
      alias: body.alias,
      email: body.email,
      name: body.name,
      lastName: body.lastName,
    };
    data.push(newUser);
    return data;
  }
  findAllOrdered(sortBy): PostsDataBase[] {
    if (!sortOrder[sortBy]) {
      throw new PreconditionFailedException(
        'Invalid parametres, try to use asc or desc',
      );
    }

    if (sortBy === sortOrder.asc) {
      return data.sort((a, b) => (parseInt(a.id) < parseInt(b.id) ? 1 : -1));
    } else if (sortBy === sortOrder.desc) {
      return data.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));
    }
    throw new PreconditionFailedException(
      'Invalid parametres, try to use asc or desc',
    );
  }
  updateOne(identificator, body): PostsDataBase[] {
    for (const user of data) {
      if (user.id == identificator) {
        user['alias'] = body.alias;
        user['email'] = body.email;
        user['name'] = body.name;
        user['lastName'] = body.lastName;
      }
    }
    return data;
  }
  deleteOne(identificador): PostsDataBase[] {
    for (const user of data) {
      if (user.id == identificador) {
        user['deleted'] = true;
      }
    }
    return data;
  }
}
