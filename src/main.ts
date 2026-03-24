import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log('server is fuckin running baby!');
  })
  .catch((error) => {
    console.log('server is crying, damm: ', error);
  })
  .finally(() => {
    console.log('the end of the chain baby!');
  });
