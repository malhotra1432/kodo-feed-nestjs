import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedService {
  getHello() {
    return 'Hello World!';
  }
}
