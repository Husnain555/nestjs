import { Body, Controller,  Post } from '@nestjs/common';
import { PostService } from './post.services';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
@Post('/add')
  addPost(@Body() post: PostDto) {
    return this.postService.addPost(post);
}
}