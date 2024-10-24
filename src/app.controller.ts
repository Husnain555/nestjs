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
  @Delete('/delete:id')
  deleteUser ():String{
return     this.UserService.deleteUser()
  }
  @Put('/update:id')
  updateUser ():String{
    return this.UserService.updateUser()
  }
  @Get('/get/:id')
  findAllUser (@Param('id')id:String){
    return this.UserService.findAllUser(`${id}`)
  }
}