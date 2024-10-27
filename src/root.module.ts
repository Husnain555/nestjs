import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.moduel';
import { PrismaService } from '../prisma/prisma.services';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.services';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user.module';


@Module({
  imports: [PrismaModule,PostModule,AuthModule,UserModule],
  controllers: [AppController,PostController],
  providers: [UserService,PrismaService,PostService],
  exports:[UserService]
})
export class RootModule {
  constructor() {
  }
}
