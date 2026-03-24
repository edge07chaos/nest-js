import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { SecurityMiddleware } from './common/middlewares/security.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [CatsModule, AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // each consumer line is an approach
    // consumer.apply(LoggerMiddleware).forRoutes('cats');
    // consumer.apply(LoggerMiddleware).forRoutes({path: 'cats', method: RequestMethod.POST})
    // consumer.apply(LoggerMiddleware).forRoutes(CatsController);
    // consumer
    //   .apply(LoggerMiddleware)
    //   .exclude({ path: 'cats', method: RequestMethod.GET })
    //   .forRoutes(CatsController);
    consumer
      .apply(LoggerMiddleware, SecurityMiddleware)
      .exclude({
        path: 'cats',
        method: RequestMethod.GET,
      })
      .forRoutes(AppController, CatsController, AuthController);
  }
}
