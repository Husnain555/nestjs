import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NextFunction,Response,Request } from 'express';


async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.enableCors();
  const GlobalMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const protocol = req.protocol
    const host = res.get('host')
    const url = req.url;
    const time = req.query.time;
    const method = req.method
    const date = new Date().toString();
    console.log(protocol, host, url, method, date, time);


    next();

  }

  app.use(GlobalMiddleware);

  await app.listen(process.env.PORT ?? 3000);


}
bootstrap();
