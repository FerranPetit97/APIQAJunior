import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

import { PostsDataBase } from './posts.inteface';

@Injectable()
export class PostsService {
  findAll(): PostsDataBase[] {
    const data: PostsDataBase[] = [];
    for (let i = 0; i < 100; i++) {
      const fakeID: string = faker.datatype.uuid();
      const fakeName: string = faker.name.firstName();
      const fakeLastName: string = faker.name.lastName();
      const fakeEmail: string = faker.internet.exampleEmail(fakeName);

      data.push({
        id: fakeID,
        email: fakeEmail,
        name: fakeName,
        lastName: fakeLastName,
      });
    }
    return data;
  }
}
