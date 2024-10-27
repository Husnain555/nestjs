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
import { UserDto } from './dto/user.dto';
import { CustomExceptionFilter } from './Errors/custom.exception.fillter';
import { Guard } from './Guard/guard.user';
import { UserInterseptor } from './interseptor/user.interseptor';
import { PostUserInterceptor } from './interseptor/post.user.interseptor';
import { AuthGuard } from '@nestjs/passport';
@Controller('user')
// @UseFilters(CustomExceptionFilter)
// @UseInterceptors(UserInterseptor)
@UseGuards(AuthGuard('local'))
export class AppController {
  constructor(private readonly UserService: UserService) {
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
  findUser(user:UserDto) {
    return user;
  }
}