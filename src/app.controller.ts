import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { CustomExceptionFilter } from './Errors/custom.exception.fillter';
import { Guard } from './Guard/guard.user';
import { UserInterseptor } from './interseptor/user.interseptor';
import { PostUserInterceptor } from './interseptor/post.user.interseptor';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
@Controller('user')
// @UseFilters(CustomExceptionFilter)
// @UseInterceptors(UserInterseptor)
export class AppController {
  constructor(private readonly UserService: UserService, private readonly authService:AuthService) {
  }
  @Post('/add')
  addUser (@Body()userDto:UserDto){
   return  this.UserService.addUser(userDto)
  }
  @Delete('/delete/:id')
  deleteUser (@Param('id',ParseIntPipe)id:string){
    console.log(id,typeof id);
    return this.UserService.deleteUser(id)
  }
  @Put('/update:id')
  updateUser (){
    return this.UserService.updateUser()
  }
  @Get('/get/')
  // @UseInterceptors(PostUserInterceptor)
  findAllUser (@Body()userDto:UserDto){
    return this.UserService.findAllUser(userDto)
  }
  @Post('/login')
  @UseGuards(AuthGuard('local'))

  findUser(@Request() req) {
    const user = req.user;
    console.log('Authenticated user:', user);

    // Pass the user object to generateToken
    return this.authService.generateToken(user);
  }
}