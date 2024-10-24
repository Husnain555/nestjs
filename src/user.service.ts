import { Injectable, Param } from '@nestjs/common';
@Injectable()
export class UserService {
  addUser(): String {
    return 'user added successfully';
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