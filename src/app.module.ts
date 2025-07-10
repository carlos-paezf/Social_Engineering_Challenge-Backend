import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GroupModule } from './group/group.module';
import { Hint } from './hint/entities/hint.entity';
import { HintModule } from './hint/hint.module';
import { RankingModule } from './ranking/ranking.module';


@Module( {
  imports: [
    GroupModule, AuthModule, RankingModule, HintModule,
    TypeOrmModule.forRoot( {
      type: "better-sqlite3",
      database: "db.sqlite",
      entities: [ Hint ],
      synchronize: true
    } )
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
} )
export class AppModule { }
