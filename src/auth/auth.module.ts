import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from '../group/entities/group.entity';
import { Ranking } from '../ranking/entities/ranking.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module( {
  imports: [ TypeOrmModule.forFeature( [ Group, Ranking ] ) ],
  controllers: [ AuthController ],
  providers: [ AuthService ],
} )
export class AuthModule { }
