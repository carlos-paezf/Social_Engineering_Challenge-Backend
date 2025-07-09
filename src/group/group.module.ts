import { Module } from '@nestjs/common';
import { GroupController } from './group/group.controller';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';

@Module({
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupModule {}
