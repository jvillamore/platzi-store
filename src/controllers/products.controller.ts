import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('page') page: string,
  ) {
    return `Nuevos productos filtrados limit=> ${limit} y offset=> ${offset} y page=> ${page}`;
  }
  @Get('/filter')
  getProductFilter() {
    return `products filters`;
  }
  @Get(':productId')
  getProduct(@Param('productId') productId: number) {
    return `product --> ${productId}`;
  }

  @Get('products1')
  getProducts1(@Query() params: any) {
    // con deconstruccion
    const { limit, offset } = params;
    return `productos filtrados limit=> ${limit} y offset=> ${offset}`;
  }
}
