import { Module } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { RecruiterController } from './recruiter.controller';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  controllers: [RecruiterController],
  providers: [RecruiterService],
  imports: [PrismaModule]
})
export class RecruiterModule {}
