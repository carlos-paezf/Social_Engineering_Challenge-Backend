import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHintDto } from './dto/create-hint.dto';
import { Hint } from './entities/hint.entity';

@Injectable()
export class HintService {
  constructor (
    @InjectRepository( Hint ) private readonly hintRepo: Repository<Hint>
  ) { }

  create ( createHintDto: CreateHintDto ) {
    const newHint = this.hintRepo.create( createHintDto );
    return this.hintRepo.save( newHint );
  }

  findAll (): Promise<Hint[]> {
    return this.hintRepo.find( { order: { postDate: 'DESC' } } );
  }

  findOne ( id: string ): Promise<Hint | null> {
    return this.hintRepo.findOneBy( { id } );
  };
}
