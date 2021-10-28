import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';
import { FeedDomain } from '../../domain/feed.domain';
import { FeedStateAdapter } from '../codec/feed.state.adapter';
import { FeedJsonRepository } from './feed.json.repository';
import { FeedEntity } from '../entity/FeedEntity';

export class FeedRepository implements FeedDomainRepository {
  async save(feedDomains: Array<FeedDomain>) {
    const feeds = [];
    for (const feedDomain of feedDomains) {
      feeds.push(FeedStateAdapter.encode(feedDomain));
    }
    return FeedJsonRepository.save(feeds);
  }

  async findAll(): Promise<Array<FeedEntity>> {
    return FeedJsonRepository.findAll();
  }
}
