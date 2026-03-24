import { BadRequestException, HttpException, HttpStatus, Injectable, NotImplementedException } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: randomUUID(),
      name: 'first cat',
      age: 45234,
      breed: 'breed-1',
    },
    {
      id: randomUUID(),
      name: 'second cat',
      age: 2342,
      breed: 'breed-2',
    },
  ];

  async index() {
    // throw new HttpException("came on man!", HttpStatus.BAD_REQUEST);
    throw new BadRequestException("something bad happened", {
      cause: new Error(),
      description: "some error description"
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.cats);
      }, 100);
    });
  }

  async show() {}

  async store(cat: Cat) {
    throw new HttpException("came on man!", HttpStatus.BAD_REQUEST);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.cats.push(cat);
        resolve(this.cats);
      }, 500);
    });
  }

  async update() { throw new NotImplementedException()}

  async destroy() { throw new NotImplementedException()}
}
