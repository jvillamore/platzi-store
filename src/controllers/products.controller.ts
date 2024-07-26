import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('page') page: string,
  ) {
    return this.productService.findAll();
  }
  @Get('/filter')
  getProductFilter() {
    return {
      message: `products filters`,
    };
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: number) {
    //if (typeof productId === 'string') return 'lol xd';
    //console.log(typeof productId);
    return this.productService.findOne(+productId);
  }

  @Get('products1')
  getProducts1(@Query() params: any) {
    // con deconstruccion
    const { limit, offset } = params;
    return {
      message: `productos filtrados limit=> ${limit} y offset=> ${offset}`,
    };
  }
  @Post()
  create(@Body() params: any) {
    return this.productService.create(params);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() params: any) {
    return this.productService.update(+id, params);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(+id);
  }
}
