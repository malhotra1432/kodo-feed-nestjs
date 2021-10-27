import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';
import { FeedDomain } from '../../domain/feed.domain';
import { FeedEntity } from '../entity/FeedEntity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedStateAdapter } from '../codec/feed.state.adapter';

export class FeedRepository implements FeedDomainRepository {
  constructor(
    private feedStateAdapter: FeedStateAdapter,
    @InjectRepository(FeedEntity)
    private feedEntityRepository: Repository<FeedEntity>,
  ) {}

  save(feedDomains: Array<FeedDomain>) {
    const feeds = [];
    for (const feedDomain of feedDomains) {
      feeds.push(this.feedStateAdapter.encode(feedDomain));
    }
    return this.feedEntityRepository.save(feeds);
  }
}
