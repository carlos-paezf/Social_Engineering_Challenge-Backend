import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { AuthModule } from './auth/auth.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [GroupModule, AuthModule, RankingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
