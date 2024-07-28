import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // ignora los campos que no estan definidos en un DTO
      whitelist: true,
      // muestra un mensaje de validación cuando el DTO tiene un campo no declarado
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
