import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  app.setGlobalPrefix( "api" );
  app.enableCors( {
    origin: [ 'http://localhost:5173', "https://carlos-paezf.github.io", "0.0.0.0" ],
    credentials: true
  } );
  await app.listen( process.env.PORT ?? 3001 );
}
bootstrap();
