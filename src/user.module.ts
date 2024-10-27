import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.services';

@Module({
  imports: [],
  providers: [UserService,PrismaService],
  exports: [UserService],
  controllers: [],
})
export class UserModule {}