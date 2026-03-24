import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  //   Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { storeCatSchema, type StoreCatDTO } from './dto/store-cat.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

// import { StoreCatDto } from './dto/store-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async index() {
    // @Query('name') name?: string,
    // @Query('age') age?: number,
    // @Query('breed') breed?: string,
    const data = await this.catsService.index();
    return {
      ok: true,
      data,
    };
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: string) {
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
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(storeCatSchema))
  async store(@Body() storeCatDTO: StoreCatDTO) {
    const res = await this.catsService.store(storeCatDTO);
    return { res };
  }

  @Put(':id')
  async update() {
    return this.catsService.update();
  }

  @Delete(':id')
  async destroy() {
    return this.catsService.destroy();
  }
}
