import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ranking } from './entities/ranking.entity';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';
import { GroupModule } from '../group/group.module';

@Module( {
  imports: [ GroupModule, TypeOrmModule.forFeature( [ Ranking ] ) ],
  controllers: [ RankingController ],
  providers: [ RankingService ],
} )
export class RankingModule { }
