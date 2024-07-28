import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [
    {
      id: 1,
      name: 'producto nro 1',
      description: 'prod',
    },
  ];
  findAll() {
    return this.orders;
  }
  findOne(id: number) {
    const item = this.orders.find((item) => item.id === id);
    if (!item)
      return new NotFoundException(`No existe la orden con el id ${id}`);
    return item;
  }
}
