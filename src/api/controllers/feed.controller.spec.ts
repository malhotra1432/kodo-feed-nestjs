import { Test, TestingModule } from '@nestjs/testing';
import { FeedController } from './feed.controller';
import { FeedService } from '../../domain/service/feed.service';
import { FeedRepository } from '../../adapters/repository/feed.repository';

describe('FeedController', () => {
  let controller: FeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [
        {
          provide: 'FeedServiceInterface',
          useClass: FeedService,
        },
        {
          provide: 'FeedDomainRepository',
          useClass: FeedRepository,
        },
      ],
    }).compile();

    controller = module.get<FeedController>(FeedController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe('Hello World!');
    });
  });
});
