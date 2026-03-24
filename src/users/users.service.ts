import { Injectable } from '@nestjs/common';
import { IUser } from './interface/user.interface';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async show(username: string) {
    return this.users.find(user => user.username == username)
  }
}
