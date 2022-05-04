import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InitialModule } from './initial/initial.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [InitialModule, ProductModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
