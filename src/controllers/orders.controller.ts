import { Controller, Get } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}
  @Get()
  getOrders() {
    return this.orderService.findAll();
  }
}
