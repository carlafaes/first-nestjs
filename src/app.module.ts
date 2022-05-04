import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InitialModule } from './initial/initial.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [InitialModule, ProductModule, MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
