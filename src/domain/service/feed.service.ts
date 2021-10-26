import { Inject, Injectable } from '@nestjs/common';
import { FeedServiceInterface } from '../ports/service/feed.service.interface';
import { FeedDomainRepository } from '../ports/repository/feed.domain.repository';

@Injectable()
export class FeedService implements FeedServiceInterface {
  constructor(
    @Inject('FeedDomainRepository')
    private readonly feedDomainRepository: FeedDomainRepository,
  ) {}
  getHello(): string {
    return this.feedDomainRepository.getHello();
  }
}
