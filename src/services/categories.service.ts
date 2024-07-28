import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      description: 'producto 1',
      name: 'producto nro 1',
    },
  ];
  findAll() {
    return this.categories;
  }
  findOne(id: number) {
    const item = this.categories.find((item) => item.id === id);
    if (!item)
      return new NotFoundException(`No existe la categoria con el id ${id}`);
    return item;
  }
}
