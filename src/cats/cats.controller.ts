import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  //   Query,
} from '@nestjs/common';
import { StoreCatDTO } from './dto/store-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async index() {
    // @Query('name') name?: string,
    // @Query('age') age?: number,
    // @Query('breed') breed?: string,
    return this.catsService.index();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    console.log('showing id:', id);
    return {
      data: {
        name: 'fake-name',
        age: 678,
        breed: 'fake-breed',
      },
    };
  }

  @Post()
  @HttpCode(201)
  async store(@Body() storeCatDTO: StoreCatDTO) {
    const res = await this.catsService.store(storeCatDTO);
    return { res };
  }

  @Put()
  async update() {}

  @Delete()
  async destroy() {}
}
