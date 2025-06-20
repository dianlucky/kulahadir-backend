import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { hostname } from 'os';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*', // Untuk development; nanti bisa ganti ke ['http://localhost:5173'] untuk lebih aman
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  // app.enableCors();
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger);
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/api/uploads/',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
