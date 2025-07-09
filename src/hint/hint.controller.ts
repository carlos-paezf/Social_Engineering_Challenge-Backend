import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateHintDto } from './dto/create-hint.dto';
import { HintService } from './hint.service';

@Controller( 'hint' )
export class HintController {
  constructor ( private readonly hintService: HintService ) { }

  @Post()
  create ( @Body() createHintDto: CreateHintDto ) {
    return this.hintService.create( createHintDto );
  }

  @Get()
  findAll () {
    return this.hintService.findAll();
  }

  @Get( ':id' )
  findOne ( @Param( 'id' ) id: string ) {
    return this.hintService.findOne( id );
  }
}
