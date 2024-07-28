import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      fullname: 'producto 1',
      name: 'producto nro 1',
    },
  ];
  findAll() {
    return this.customers;
  }
  findOne(name: string) {
    const item = this.customers.find((item) => item.name === name);
    if (!item)
      return new NotFoundException(
        `No existe la custormer con el name ${name}`,
      );
    return item;
  }
}
