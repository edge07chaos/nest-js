import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log('server is fuckin running baby!');
    console.log("check window:", process.env.PORT ?? 3000);
    
  })
  .catch((error) => {
    console.log('server is crying, damm:', error);
  })
  .finally(() => {
    console.log('the end of the chain baby!');
  });
