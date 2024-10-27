import { Module } from '@nestjs/common';
import { AuthStrategy } from './auth.strategy';
import { UserModule } from '../user.module';

@Module({
  imports: [UserModule],
  exports:[],
  providers:[AuthStrategy],
  controllers: [],
})
export class AuthModule {}