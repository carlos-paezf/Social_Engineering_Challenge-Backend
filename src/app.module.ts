import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EnvConfiguration } from './config/app.config';
import { GroupModule } from './group/group.module';
import { HintModule } from './hint/hint.module';
import { RankingModule } from './ranking/ranking.module';


@Module( {
  imports: [
    ConfigModule.forRoot( { isGlobal: true, load: [ EnvConfiguration ] } ),
    GroupModule, AuthModule, RankingModule, HintModule,
    TypeOrmModule.forRoot( {
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt( process.env.DATABASE_PORT || '5432' ),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    } ),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
