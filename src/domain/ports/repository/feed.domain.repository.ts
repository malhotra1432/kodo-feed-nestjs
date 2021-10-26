import { FeedDomain } from '../../feed.domain';

export interface FeedDomainRepository {
  getHello(): string;
  storeFeed(feedDomains: Array<FeedDomain>): Promise<void>;
}
