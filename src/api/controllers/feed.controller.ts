import { Controller, Get, Inject } from '@nestjs/common';
import { FeedServiceInterface } from '../../domain/ports/service/feed.service.interface';

@Controller('api/v1/feeds')
export class FeedController {
  constructor(
    @Inject('FeedServiceInterface')
    private readonly feedService: FeedServiceInterface,
  ) {}
  @Get()
  getHello(): string {
    return this.feedService.getHello();
  }
}
