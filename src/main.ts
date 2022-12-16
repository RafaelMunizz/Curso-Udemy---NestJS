import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Bibliotecas para auxiliar na validação e transformação de dados
// npm i class-validator class-transformer

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Se não estiver validado no DTO, será retirado do objeto
    forbidNonWhitelisted: true, // Não permite que dado não listado seja atribuido na criação
    transform: true, // Irá transformar o dado que chegará no tipo da classe
  }));
  await app.listen(3000);
}
bootstrap();
