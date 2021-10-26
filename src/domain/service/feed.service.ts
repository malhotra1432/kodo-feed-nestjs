import { Inject, Injectable } from '@nestjs/common';
import { FeedServiceInterface } from '../ports/service/feed.service.interface';
import { FeedDomainRepository } from '../ports/repository/feed.domain.repository';
import { CreateFeedCommand } from '../command/create.feed.command';

@Injectable()
export class FeedService implements FeedServiceInterface {
  constructor(
    @Inject('FeedDomainRepository')
    private readonly feedDomainRepository: FeedDomainRepository,
  ) {}
  getHello(): string {
    return this.feedDomainRepository.getHello();
  }

  async storeFeed(createFeedCommand: CreateFeedCommand): Promise<void> {
    await this.feedDomainRepository.storeFeed(
      CreateFeedCommand.toCreateFeed(createFeedCommand),
    );
  }
}
