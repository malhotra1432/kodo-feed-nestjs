import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';
import { FeedDomain } from '../../domain/feed.domain';
import { FeedStateAdapter } from '../codec/feed.state.adapter';
import { FeedJsonOrmRepository } from './orm/feed.json.orm.repository';
import { Inject } from '@nestjs/common';
import { FeedState } from '../../domain/feed.state';

export class FeedRepository implements FeedDomainRepository {
  constructor(
    @Inject('FeedJsonOrmRepository')
    private readonly feedJsonOrmRepository: FeedJsonOrmRepository,
  ) {
    this.feedJsonOrmRepository = feedJsonOrmRepository;
  }

  async save(feedDomains: Array<FeedDomain>) {
    const feeds = [];
    for (const feedDomain of feedDomains) {
      feeds.push(FeedStateAdapter.encode(feedDomain));
    }
    return this.feedJsonOrmRepository.save(feeds);
  }

  async findAll(): Promise<Array<FeedState>> {
    const feedState = [];
    const feedEntityList = await this.feedJsonOrmRepository.findAll();
    for (const feedEntity of feedEntityList) {
      feedState.push(FeedStateAdapter.decode(feedEntity));
    }
    return feedState;
  }
}
