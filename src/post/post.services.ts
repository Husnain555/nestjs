import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.services';
import { PostDto } from './dto/post.dto';

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
}