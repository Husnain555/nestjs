import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.services';
import { UserDto } from './dto/user.dto';
@Injectable()
export class UserService {
  constructor(private prisma:PrismaService) {}
  addUser(userdto:UserDto){
   return this.prisma.user.create({
      data:{
        id:userdto.id,
        name:userdto.name,
        email:userdto.email,
        password:userdto.password
      }
    })
  }
  deleteUser (): String {
    return 'user removed successfully';
  }
  updateUser():String{
    return 'user updated successfully';
  }
  findAllUser(@Param('id')id:String):String {
    return `user ${id} find successfully`;
  }
}