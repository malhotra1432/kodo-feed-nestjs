import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';
import { FeedDomain } from '../../domain/feed.domain';
import { FeedStateAdapter } from '../codec/feed.state.adapter';
import { FeedOrmRepository } from './feed.orm.repository';
import { getCustomRepository } from 'typeorm';
import { FeedEntity } from '../entity/FeedEntity';

export class FeedRepository implements FeedDomainRepository {
  async save(feedDomains: Array<FeedDomain>) {
    const feedEntityRepository = getCustomRepository(FeedOrmRepository);
    const feeds = [];
    for (const feedDomain of feedDomains) {
      feeds.push(FeedStateAdapter.encode(feedDomain));
    }
    return feedEntityRepository.saveDataToJsonFile(feeds);
  }

  async findAll(): Promise<Array<FeedEntity>> {
    const feedEntityRepository = getCustomRepository(FeedOrmRepository);
    return feedEntityRepository.findAll();
  }
}
