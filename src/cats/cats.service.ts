import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { create } from 'domain';
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
    return this.cats;
  }

  async show() {}

  async store(cat: Cat) {
    this.cats.push(cat);
  }

  async update() {}

  async destroy() {}
}
