import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { PrismaModule } from '../prisma/prisma.module';
import {UsersModule} from "../users/users.module";
import {UsersService} from "../users/users.service";

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  imports: [PrismaModule, UsersModule],
})
export class ApplicationsModule {}
