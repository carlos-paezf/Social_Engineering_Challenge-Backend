import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from '../group/entities/group.entity';
import { Ranking } from '../ranking/entities/ranking.entity';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor (
    private config: ConfigService,
    @InjectRepository( Group )
    private groupRepo: Repository<Group>,
    @InjectRepository( Ranking )
    private rankingRepo: Repository<Ranking>
  ) { }

  async attemptLogin ( dto: LoginDTO ) {
    const { email, password, groupId } = dto;

    const validEmail = this.config.get<string>( 'CHALLENGE_EMAIL' );
    const validPassword = this.config.get<string>( 'CHALLENGE_PASSWORD' );

    const group = await this.groupRepo.findOne( { where: { id: groupId } } );
    if ( !group ) throw new UnauthorizedException( 'Grupo no encontrado' );

    const success = email === validEmail && password === validPassword;

    if ( success ) {
      const existingRanking = await this.rankingRepo.findOne( { where: { group: { id: groupId } } } );
      if ( !existingRanking ) {
        const ranking = this.rankingRepo.create( {
          group,
          completedAt: new Date(),
          attempts: 1, // inicial
          timeTaken: 0 // será actualizado luego
        } );
        await this.rankingRepo.save( ranking );
      }
    }

    return { success };
  }
}
