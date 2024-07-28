import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      fullname: 'producto 1',
      username: 'producto nro 1',
      state: 'asd',
    },
  ];
  findAll() {
    return this.users;
  }
  findOne(id: number) {
    const item = this.users.find((item) => item.id === id);
    if (!item)
      return new NotFoundException(`No existe el usuario con el id ${id}`);
    return item;
  }
}
