import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfig, NestConfig } from 'config/configuration';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<EnvConfig>);
  const nestPort = configService.get<NestConfig>('nest').port;
  const nodeEnv = configService.get('nodeEnv');

  // Enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Setting up swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Udemy clone API')
    .setDescription('The Udemy API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, document);

  await app.listen(nestPort);

  Logger.log(
    `🚀🚀🚀 nest is running in ${nodeEnv} mode on port ${nestPort}`,
    'Bootstrap',
  );

  Logger.log(
    `You can see the api docs on http://localhost:${nestPort}/docs`,
    'Bootstrap',
  );
}

bootstrap();
