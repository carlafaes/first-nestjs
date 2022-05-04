import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InitialModule } from './initial/initial.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ ProductsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
