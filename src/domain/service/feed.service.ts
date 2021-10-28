import { Inject, Injectable } from '@nestjs/common';
import { FeedServiceInterface } from '../ports/service/feed.service.interface';
import { FeedDomainRepository } from '../ports/repository/feed.domain.repository';
import { CreateFeedCommand } from '../command/create.feed.command';
import { FeedDomain } from '../feed.domain';
import { FeedEntity } from '../../adapters/entity/FeedEntity';

@Injectable()
export class FeedService implements FeedServiceInterface {
  constructor(
    @Inject('FeedDomainRepository')
    private readonly feedDomainRepository: FeedDomainRepository,
  ) {}

  async storeFeed(createFeedCommands: Array<CreateFeedCommand>): Promise<void> {
    const feeds = [];
    for (const command of createFeedCommands) {
      feeds.push(FeedDomain.create(command));
    }
    await this.feedDomainRepository.save(feeds);
  }

  async findAll(): Promise<Array<FeedEntity>> {
    return await this.feedDomainRepository.findAll();
  }
}
