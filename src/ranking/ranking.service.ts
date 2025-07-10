import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { Ranking } from './entities/ranking.entity';
import { Group } from '../group/entities/group.entity';

@Injectable()
export class RankingService {
  constructor (
    @InjectRepository( Ranking ) private readonly rankingRepo: Repository<Ranking>,
    @InjectRepository( Group ) private readonly groupRepo: Repository<Group>,
  ) { }

  async create ( createRankingDto: CreateRankingDto ) {
    const group = await this.groupRepo.findOne( {
      where: { id: createRankingDto.groupId },
    } );

    if ( !group ) {
      throw new NotFoundException( 'Grupo no encontrado' );
    }

    const existingRanking = await this.rankingRepo.findOne( {
      where: { group: { id: createRankingDto.groupId } },
    } );

    console.log( { existingRanking } );

    if ( existingRanking ) {
      if ( existingRanking.timeTaken > 0 ) {
        return existingRanking; // ya se había registrado
      }

      // caso especial: actualizar solo si el tiempo anterior fue 0 (posible fallo inicial)
      existingRanking.timeTaken = createRankingDto.timeTaken;
      existingRanking.attempts = createRankingDto.attempts;
      existingRanking.completedAt = new Date();
      return this.rankingRepo.save( existingRanking );
    }

    const ranking = this.rankingRepo.create( {
      group,
      timeTaken: createRankingDto.timeTaken,
      attempts: createRankingDto.attempts,
    } );
    console.log( { ranking } );

    return this.rankingRepo.save( ranking );
  }

  findAll (): Promise<Ranking[]> {
    return this.rankingRepo.find( {
      relations: [ 'group' ],
      order: {
        attempts: 'ASC',
        timeTaken: 'ASC',
      },
    } );
  }
}
