import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { FeedServiceInterface } from '../../domain/ports/service/feed.service.interface';
import { CreateFeedsMessage } from '../../message/create.feeds.message';

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

  @Post()
  async storeFeed(
    @Body() createFeedsMessage: CreateFeedsMessage,
  ): Promise<void> {
    await this.feedService.storeFeed(
      CreateFeedsMessage.toCreateFeedCommand(createFeedsMessage),
    );
  }
}
