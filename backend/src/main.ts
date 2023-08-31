import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app
    .setGlobalPrefix('api')
    .useStaticAssets(join(__dirname, '../public/'), { prefix: '/static' })
    .listen(3000);
}
bootstrap();
