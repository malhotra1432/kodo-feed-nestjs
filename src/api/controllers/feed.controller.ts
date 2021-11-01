import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { FeedServiceInterface } from '../../domain/ports/service/feed.service.interface';
import { CreateFeedsMessage } from '../../message/create.feeds.message';
import { FeedEntity } from '../../adapters/entity/FeedEntity';

@Controller('api/v1/feeds')
export class FeedController {
  private readonly logger = new Logger(FeedController.name);
  constructor(
    @Inject('FeedServiceInterface')
    private readonly feedService: FeedServiceInterface,
  ) {}

  @Get('/search')
  async searchFeeds(): Promise<Array<FeedEntity>> {
    this.logger.log('Fetching all feeds... ');
    return await this.feedService.findAll();
  }

  @Post('/store')
  async storeFeed(
    @Body() createFeedsMessage: Array<CreateFeedsMessage>,
  ): Promise<void> {
    this.logger.log('Storing feeds... ');
    const createFeedCommand = [];
    for (const feedMessage of createFeedsMessage) {
      createFeedCommand.push(
        CreateFeedsMessage.toCreateFeedCommand(feedMessage),
      );
    }
    this.logger.log('Storing feeds done ');
    await this.feedService.storeFeed(createFeedCommand);
  }
}
