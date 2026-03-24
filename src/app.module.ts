import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddlewareClass } from './common/middlewares/logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddlewareClass).forRoutes('cats');
    // consumer.apply(LoggerMiddlewareClass).forRoutes({path: 'cats', method: RequestMethod.POST})
    consumer.apply(LoggerMiddlewareClass).forRoutes(CatsController);
  }
}
