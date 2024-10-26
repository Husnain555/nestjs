import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
@Controller('user')
export class AppController {
  constructor(private readonly UserService: UserService) {
  }
  @Post('/add')
  addUser (@Body()userDto:UserDto){
   return  this.UserService.addUser(userDto)
  }
  @Delete('/delete/:id',ParseIntPipe)
  deleteUser (@Param('id')id:string){
    return this.UserService.deleteUser(id)
  }
  @Put('/update:id')
  updateUser (){
    return this.UserService.updateUser()
  }
  @Get('/get')
  findAllUser (@Body()userDto:UserDto){
    return this.UserService.findAllUser(userDto)
  }
}