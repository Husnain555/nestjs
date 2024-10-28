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
    const page = Date.now()
    const timespend = Date.now()- page
    const protocol = req.protocol
    const host = res.get('host')
    const url = req.url;
    const time = req.query.time;
    const method = req.method
    const date = new Date().toString();
    const devive = req.headers
    const ip = req.ip === '::1' ? '127.0.0.1' : (req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    const axios = require('axios');

 axios.get('https://geolocation-db.com/json/2cdcf500-85f3-11ef-8820-ffaffd3cd2a3')
      .then(response => {
        const locationData = response.data;
        console.log(locationData);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });

    console.log( date );


    next();

  }

  app.use(GlobalMiddleware);

  await app.listen(process.env.PORT ?? 3000);


}
bootstrap();
