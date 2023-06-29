import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { DbConfig, EnvConfig, configuration } from '../config/configuration';
import { validationSchema } from 'config/validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';
import { CategoryModule } from './modules/category/category.module';
import { SubcategoryModule } from './modules/subcategory/subcategory.module';
import { SectionModule } from './modules/section/section.module';
import { CurriculumItemModule } from './modules/curriculum-item/curriculum-item.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';

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
          host: configService.get<DbConfig>('db')!.host,
          port: configService.get<DbConfig>('db')!.port,
          username: configService.get<DbConfig>('db')!.username,
          password: configService.get<DbConfig>('db')!.password,
          database: configService.get<DbConfig>('db')!.database,
          autoLoadEntities: true,
          synchronize: true,
        };
      },

      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      global: true,

      useFactory: (configService: ConfigService<EnvConfig>) => {
        return {
          secret: configService.get('jwtSecret'),
          signOptions: {
            expiresIn: '3d',
          },
        };
      },

      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    CourseModule,
    CategoryModule,
    SubcategoryModule,
    SectionModule,
    CurriculumItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
