import { Module } from '@nestjs/common';
import { AuthStrategy } from './auth.strategy';
import { UserModule } from '../user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './auth.constant';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule,JwtModule.register({
    secret:JwtConstants.secrate,
    signOptions:{
      expiresIn:"60s"
    }
  })],
  exports:[AuthService],
  providers:[AuthStrategy,AuthService],
  controllers: [],
})
export class AuthModule {}