import { FeedDomain } from '../../feed.domain';

export interface FeedDomainRepository {
  getHello(): string;
  storeFeed(feed: FeedDomain): Promise<void>;
}
