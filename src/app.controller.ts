import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class AppController {
  constructor(private readonly UserService: UserService) {
  }
  @Post('/add')
  addUser ():String{
   return  this.UserService.addUser()
  }
  @Delete('/delete:id')
  deleteUser ():String{
return     this.UserService.deleteUser()
  }
  @Put('/update:id')
  updateUser ():String{
    return this.UserService.updateUser()
  }
  @Get('/get:id')
  findAllUser (@Param('id')id:String){
    return this.UserService.findAllUser(`${id}`)
  }
}