import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GroupModule } from './group/group.module';
import { HintModule } from './hint/hint.module';
import { RankingModule } from './ranking/ranking.module';
import { ConfigModule } from '@nestjs/config';


@Module( {
  imports: [
    ConfigModule.forRoot( { isGlobal: true } ),
    GroupModule, AuthModule, RankingModule, HintModule,
    TypeOrmModule.forRoot( {
      type: "better-sqlite3",
      database: "db.sqlite",
      entities: [ __dirname + '/**/*.entity{.ts,.js}' ],
      synchronize: true
    } )
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
