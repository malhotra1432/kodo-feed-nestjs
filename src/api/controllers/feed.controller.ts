import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { FeedServiceInterface } from '../../domain/ports/service/feed.service.interface';
import { CreateFeedsMessage } from '../model/message/create.feeds.message';
import { FeedResponse } from '../model/response/feed.response';

@Controller('api/v1/feeds')
export class FeedController {
  private readonly logger = new Logger(FeedController.name);
  constructor(
    @Inject('FeedServiceInterface')
    private readonly feedService: FeedServiceInterface,
  ) {}

  @Get('/search')
  async searchFeeds(@Res() response: Response) {
    this.logger.log('Fetching all feeds... ');
    const feedStateArray = await this.feedService.findAll();
    return response.json(FeedResponse.feedResponseBuilder(feedStateArray));
  }

  @Post('/store')
  async storeFeed(
    @Body() createFeedsMessage: Array<CreateFeedsMessage>,
    @Res() response: Response,
  ) {
    this.logger.log('Storing feeds... ');
    const createFeedCommand = [];
    for (const feedMessage of createFeedsMessage) {
      createFeedCommand.push(
        CreateFeedsMessage.toCreateFeedCommand(feedMessage),
      );
    }
    this.logger.log('Storing feeds done ');
    await this.feedService.storeFeed(createFeedCommand);
    response
      .status(HttpStatus.CREATED)
      .json({ message: 'Feed data stored successfully! ' });
  }
}
