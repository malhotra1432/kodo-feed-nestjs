import { FeedDomain } from '../../feed.domain';
import { FeedEntity } from '../../../adapters/entity/FeedEntity';

export interface FeedDomainRepository {
  save(feedDomains: Array<FeedDomain>);
  findAll(): Promise<Array<FeedEntity>>;
}
