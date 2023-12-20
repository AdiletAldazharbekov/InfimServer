import { Module } from '@nestjs/common';
import { BranchsController } from './branchs.controller';
import { BranchsService } from './branchs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Branch } from './branchs.model';

@Module({
  imports: [SequelizeModule.forFeature([Branch])],
  controllers: [BranchsController],
  providers: [BranchsService],
})
export class BranchsModule {}
