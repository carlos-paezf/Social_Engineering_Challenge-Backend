import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor (
    @InjectRepository( Group ) private readonly groupRepo: Repository<Group>
  ) { }

  create ( createGroupDto: CreateGroupDto ) {
    const newGroup = this.groupRepo.create( createGroupDto );
    return this.groupRepo.save( newGroup );
  }

  findAll (): Promise<Group[]> {
    return this.groupRepo.find( { order: { createdAt: 'DESC' } } );
  }

  findOne ( id: string ): Promise<Group | null> {
    return this.groupRepo.findOneBy( { id } );
  };
}
