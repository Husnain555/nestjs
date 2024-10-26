import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.moduel';
import { PrismaService } from '../prisma/prisma.services';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.services';


@Module({
  imports: [PrismaModule,PostModule],
  controllers: [AppController,PostController],
  providers: [UserService,PrismaService,PostService],
})
export class RootModule {
  constructor() {
  }
}
