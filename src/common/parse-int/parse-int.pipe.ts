import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    console.log(`${value},  ${val} `);
    if (isNaN(val))
      throw new BadRequestException(`The value ${value} is not an integer`);
    return val;
  }
}
