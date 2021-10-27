import { Body, Controller, Inject, Post } from '@nestjs/common';
import { FeedServiceInterface } from '../../domain/ports/service/feed.service.interface';
import { CreateFeedsMessage } from '../../message/create.feeds.message';

@Controller('api/v1/feeds')
export class FeedController {
  constructor(
    @Inject('FeedServiceInterface')
    private readonly feedService: FeedServiceInterface,
  ) {}

  @Post('/store')
  async storeFeed(
    @Body() createFeedsMessage: Array<CreateFeedsMessage>,
  ): Promise<void> {
    const createFeedCommand = [];
    for (const feedMessage of createFeedsMessage) {
      createFeedCommand.push(
        CreateFeedsMessage.toCreateFeedCommand(feedMessage),
      );
    }
    await this.feedService.storeFeed(createFeedCommand);
  }
}
