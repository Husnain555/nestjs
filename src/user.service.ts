import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.services';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  addUser(userdto: UserDto) {
    // throw new CustomError
    return this.prisma.user.create({
      data: {
        id: userdto.id,
        name: userdto.name,
        email: userdto.email,
        password: userdto.password,
      },
    });
  }

  findUser({username,password}:{username:string,password:string}) {
    return this.prisma.user.findFirst({
      where: {
        name: username,
        password: password,
      },
    });
  }

  deleteUser(id: string) {
    const userId = parseInt(id, 10);

    return this.prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }

  updateUser() {
    return 'User updated successfully';
  }

  findAllUser(userDto: UserDto) {
    return this.prisma.user.findMany({
      where: {
        id: userDto.id,
      },
    });
  }
}
