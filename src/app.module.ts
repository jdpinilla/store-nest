import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './modules/categories/controller/categories.controller';
import { CategoriesModule } from './modules/categories/module/categories.module';
import { CategoriesService } from './modules/categories/service/categories.service';
import { ProductsService } from './modules/products/service/products.service';
import { ProductsModule } from './modules/products/module/products.module';
import { ProductsController } from './modules/products/controller/products.controller';
import { BrandController } from './modules/brand/controller/brand.controller';
import { BrandService } from './modules/brand/service/brand.service';
import { BrandModule } from './modules/brand/module/brand.module';
import { UserModule } from './modules/user/module/user.module';
import { UserController } from './modules/user/controller/user.controller';
import { UserService } from './modules/user/service/user.service';
import { CustomerModule } from './modules/customer/module/customer.module';
import { CustomerController } from './modules/customer/controller/customer.controller';
import { CustomerService } from './modules/customer/service/customer.service';

@Module({
  imports: [CategoriesModule, ProductsModule, BrandModule, UserModule, CustomerModule],
  controllers: [AppController, ProductsController, CategoriesController, BrandController, UserController, CustomerController],
  providers: [AppService, CategoriesService, ProductsService, BrandService, UserService, CustomerService],
})
export class AppModule {}
