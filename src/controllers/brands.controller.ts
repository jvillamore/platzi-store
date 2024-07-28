import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BrandsService } from 'src/services/brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) {}

  @Get()
  getBrands() {
    return this.brandService.findAll();
  }
  @Get(':brandId')
  getOne(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandService.findOne(brandId);
  }
}
