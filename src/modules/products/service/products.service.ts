import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '@entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '@dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Test description',
      price: 123,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const found = this.products.findIndex((item) => item.id === id);
    if (found === -1) throw new NotFoundException('Product not found');
    this.products[found] = {
      ...this.products[found],
      ...payload,
    };
    return this.products[found];
  }

  delete(id: number) {
    const product = this.products.findIndex((item) => item.id === id);
    if (product === -1) throw new NotFoundException(`Product #${id} not found`);
    this.products.splice(product, 1);
  }
}
