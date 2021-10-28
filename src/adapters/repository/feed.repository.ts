import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';
import { FeedDomain } from '../../domain/feed.domain';
import { FeedStateAdapter } from '../codec/feed.state.adapter';
import { FeedOrmRepository } from './feed.orm.repository';
import { getCustomRepository } from 'typeorm';

export class FeedRepository implements FeedDomainRepository {
  save(feedDomains: Array<FeedDomain>) {
    const feedEntityRepository = getCustomRepository(FeedOrmRepository);
    const feeds = [];
    for (const feedDomain of feedDomains) {
      feeds.push(FeedStateAdapter.encode(feedDomain));
    }
    return feedEntityRepository.save(feeds);
  }
}
