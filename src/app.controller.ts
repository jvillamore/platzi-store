import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { of } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('nuevo')
  nuevoMetodo() {
    return 'es un nuevo método';
  }
  @Get('/ruta/')
  nuevaRuta() {
    return 'es un nuevo método con /';
  }
  @Get('products/filter')
  getProductFilter() {
    return `products filters`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: number) {
    return `product ${productId}`;
  }
  @Get('categories/:id/product/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `categoria: ${productId}, con idProduct ${id}`;
  }
  @Get('products1')
  getProducts1(@Query() params: any) {
    // con deconstruccion
    const { limit, offset } = params;
    return `productos filtrados limit=> ${limit} y offset=> ${offset}`;
  }
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('page') page: string,
  ) {
    return `Nuevos productos filtrados limit=> ${limit} y offset=> ${offset} y page=> ${page}`;
  }
}
