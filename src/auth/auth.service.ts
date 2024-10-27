import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  generateToken (username: string){
    const payload = {
      username:username
    };
    console.log(payload);
    return{
      access_token:this.jwtService.sign(payload)


      }
    }
  }
