import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  @Get()
  status() {
    return {
      message: "the serve if fuckin up...check your side instead"
    }
  }
}
