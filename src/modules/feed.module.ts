import { Module } from '@nestjs/common';
import { FeedController } from '../api/controllers/feed.controller';
import { FeedService } from '../domain/service/feed.service';
import { FeedRepository } from '../adapters/repository/feed.repository';

@Module({
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
})
export class FeedModule {}
