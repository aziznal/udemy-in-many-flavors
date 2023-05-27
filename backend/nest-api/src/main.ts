import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfig, NestConfig } from 'config/configuration';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<EnvConfig>);

  await app.listen(configService.get<NestConfig>('nest').port);

  Logger.log(
    `🚀🚀🚀 nest is running on port ${
      configService.get<NestConfig>('nest').port
    }`,
    'Bootstrap',
  );
}

bootstrap();
