import { Module } from '@nestjs/common';
import { PostService } from './post.services';
import { PrismaService } from '../../prisma/prisma.services';

@Module({
  imports: [],
  providers:[PostService,PrismaService],
  exports:[],
  controllers:[],

})
export class PostModule {}