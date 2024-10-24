import { Global, Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prisma.services';

@Global()
@Module({
  exports: [],
  providers: [PrismaService]

})
export class PrismaModule {}