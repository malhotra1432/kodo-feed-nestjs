import { Injectable } from '@nestjs/common';
import { FeedServiceInterface } from '../ports/service/feed.service.interface';

@Injectable()
export class FeedService implements FeedServiceInterface {
  getHello() {
    return 'Hello World!';
  }
}
