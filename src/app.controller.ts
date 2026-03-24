import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  status() {
    return {
      message: 'the serve if fuckin up...check your side instead',
    };
  }
}
