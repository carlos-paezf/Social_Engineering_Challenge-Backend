import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupService } from './group.service';

@Controller( 'group' )
export class GroupController {
  constructor ( private readonly groupService: GroupService ) { }

  @Post()
  create ( @Body() createHintDto: CreateGroupDto ) {
    return this.groupService.create( createHintDto );
  }

  @Get()
  findAll () {
    return this.groupService.findAll();
  }

  @Get( ':id' )
  findOne ( @Param( 'id' ) id: string ) {
    return this.groupService.findOne( id );
  }
}
