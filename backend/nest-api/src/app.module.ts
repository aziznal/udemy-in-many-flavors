import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { DbConfig, EnvConfig, configuration } from '../config/configuration';
import { validationSchema } from 'config/validation';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
      validationSchema: validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService<EnvConfig>) => {
        return {
          type: 'postgres',
          host: configService.get<DbConfig>('db').host,
          port: configService.get<DbConfig>('db').port,
          username: configService.get<DbConfig>('db').username,
          password: configService.get<DbConfig>('db').password,
          database: configService.get<DbConfig>('db').database,
          autoLoadEntities: true,
        };
      },

      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
