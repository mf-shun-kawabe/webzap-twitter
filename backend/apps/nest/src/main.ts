import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // CORS 有効化
  app.enableCors({
    origin: 'http://localhost:3030',
    credentials: true,
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
