import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from 'src/entities/brand.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      description: 'producto 1',
      name: 'producto nro 1',
    },
  ];
  findAll() {
    return this.brands;
  }
  findOne(id: number) {
    const item = this.brands.find((item) => item.id === id);
    if (!item)
      return new NotFoundException(`No existe la marca con el id ${id}`);
    return item;
  }
}
