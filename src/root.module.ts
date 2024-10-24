import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.moduel';
import { PrismaService } from '../prisma/prisma.services';


@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [UserService,PrismaService],
})
export class RootModule {
  constructor() {
  }
}
