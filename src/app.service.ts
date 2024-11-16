import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Beeheal' + process.env.MONGODB_URI;
  }
}
