import { FeedDomain } from '../../feed.domain';
import { FeedState } from '../../feed.state';

export interface FeedDomainRepository {
  save(feedDomains: Array<FeedDomain>);
  findAll(): Promise<Array<FeedState>>;
}
