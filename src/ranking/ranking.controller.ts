import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { RankingService } from './ranking.service';

@Controller( 'ranking' )
export class RankingController {
  constructor ( private readonly rankingService: RankingService ) { }

  @Post()
  create ( @Body() createRankingDto: CreateRankingDto ) {
    return this.rankingService.create( createRankingDto );
  }

  @Get()
  findAll () {
    return this.rankingService.findAll();
  }
}
