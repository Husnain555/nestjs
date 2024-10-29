import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.services';
import { PostDto } from './dto/post.dto';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}
  addPost(postDto: PostDto){
   return   this.prisma.post.create({
   data:{
     userId:postDto.userId,
     date:postDto.date,
     description:postDto.description

      }

    })
  }
  findUnique(id:string){
    const userId = parseInt(id, 13);


return this.prisma.user.findFirst({

  where:{
    id: userId,

  },
  include:{
    posts:true
  }

})

  }
}