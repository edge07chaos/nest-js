import { Injectable } from '@nestjs/common';
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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.cats);
      }, 100);
    });
  }

  async show() {}

  async store(cat: Cat) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.cats.push(cat);
        resolve(this.cats);
      }, 500);
    });
  }

  async update() {}

  async destroy() {}
}
