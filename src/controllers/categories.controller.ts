import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get(':id/product/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return this.categoriesService.findAll();
  }
}
