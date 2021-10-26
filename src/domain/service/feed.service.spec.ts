import { Test, TestingModule } from '@nestjs/testing';
import { FeedService } from './feed.service';
import { FeedRepository } from '../../adapters/repository/feed.repository';

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'FeedDomainRepository',
          useClass: FeedRepository,
        },
      ],
    }).compile();

    service = module.get<FeedService>(FeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
