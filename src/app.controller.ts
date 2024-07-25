import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

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
}
