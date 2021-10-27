import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';
import { FeedDomain } from '../../domain/feed.domain';
import { FeedEntity } from '../entity/FeedEntity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class FeedRepository implements FeedDomainRepository {
  constructor(
    @InjectRepository(FeedEntity)
    private feedEntityRepository: Repository<FeedEntity>,
  ) {}

  private static encode(feedDomain: FeedDomain): FeedEntity {
    return {
      _id: undefined,
      name: feedDomain.name.getName(),
      image: feedDomain.image.getImage(),
      description: feedDomain.description.getDescription(),
      dateLastEdited: feedDomain.dateLastEdited,
    };
  }

  save(feedDomains: Array<FeedDomain>) {
    const feeds = [];
    for (const feedDomain of feedDomains) {
      feeds.push(FeedRepository.encode(feedDomain));
    }
    return this.feedEntityRepository.save(feeds);
  }
}
