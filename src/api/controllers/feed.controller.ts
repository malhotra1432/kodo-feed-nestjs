import { Body, Controller, Inject, Post } from '@nestjs/common';
import { FeedServiceInterface } from '../../domain/ports/service/feed.service.interface';
import { CreateFeedsMessage } from '../../message/create.feeds.message';

@Controller('api/v1/feeds')
export class FeedController {
  constructor(
    @Inject('FeedServiceInterface')
    private readonly feedService: FeedServiceInterface,
  ) {}

  @Post()
  async storeFeed(
    @Body() createFeedsMessage: Array<CreateFeedsMessage>,
  ): Promise<void> {
    const createFeedCommands = [];
    for (const feedMessage of createFeedsMessage) {
      const items = CreateFeedsMessage.toCreateFeedCommand(feedMessage);
      createFeedCommands.push(items);
    }
    await this.feedService.storeFeed(createFeedCommands);
  }
}
