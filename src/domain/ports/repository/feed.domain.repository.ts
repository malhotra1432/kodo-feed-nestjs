import { FeedDomain } from '../../feed.domain';

export interface FeedDomainRepository {
  save(feedDomains: Array<FeedDomain>);
}
