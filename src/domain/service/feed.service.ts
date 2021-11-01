import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
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
    try {
      await this.feedDomainRepository.save(feeds);
    } catch (e) {
      throw new HttpException(
        'Unable to store feed data ',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll(): Promise<Array<FeedEntity>> {
    try {
      return await this.feedDomainRepository.findAll();
    } catch (e) {
      throw new HttpException(
        'Unable to fetch feed data ' + e,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
