import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { Product } from 'src/entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      description: 'producto 1',
      name: 'producto nro 1',
      price: 10,
      stock: 1,
      image: 'https://alal.com',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product)
      return new NotFoundException(`No existe un producto con el id ${id}`);
    return product;
  }
  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const indexProduct = this.products.findIndex((prod) => prod.id === id);
    if (indexProduct < 0)
      return new NotFoundException(`No existe un producto con el id ${id}`);

    const updateProduct = {
      ...this.products[indexProduct],
      ...payload,
    };
    this.products[indexProduct] = updateProduct;
    return updateProduct;
  }
  delete(id: number) {
    const indexProduct = this.products.findIndex((prod) => prod.id === id);
    if (indexProduct < 0)
      return new NotFoundException(`No existe un producto con el id ${id}`);
    this.products.splice(indexProduct, 1);
    return {
      id,
      message: 'producto eliminado',
    };
  }
}
