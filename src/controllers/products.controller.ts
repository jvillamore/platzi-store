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

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('page') page: string,
  ) {
    return {
      message: `Nuevos productos filtrados limit=> ${limit} y offset=> ${offset} y page=> ${page}`,
    };
  }
  @Get('/filter')
  getProductFilter() {
    return {
      message: `products filters`,
    };
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: number) {
    return {
      message: `product --> ${productId}`,
    };
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
    return {
      message: 'producto creado',
      params,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() params: any) {
    return {
      id,
      params,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return { id };
  }
}
