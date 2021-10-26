import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';

export class FeedRepository implements FeedDomainRepository {
  getHello(): string {
    return 'Hello World!';
  }
}
