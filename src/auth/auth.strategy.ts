import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../user.service';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserDto> {
    const user = await this.userService.findUser({username,password});
  // const   username = user.name


    if (user && user.password === password && user.name === username) {
      return user;
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
