import { Module } from '@nestjs/common';
import { FeedController } from '../api/controllers/feed.controller';
import { FeedService } from '../domain/service/feed.service';
import { FeedRepository } from '../adapters/repository/feed.repository';
import { FeedStateAdapter } from '../adapters/codec/feed.state.adapter';
import { FeedJsonRepository } from '../adapters/repository/orm/feed.json.repository';

@Module({
  imports: [],
  controllers: [FeedController],
  providers: [
    FeedStateAdapter,
    {
      provide: 'FeedServiceInterface',
      useClass: FeedService,
    },
    {
      provide: 'FeedDomainRepository',
      useClass: FeedRepository,
    },
    {
      provide: 'FeedJsonOrmRepository',
      useClass: FeedJsonRepository,
    },
  ],
})
export class FeedModule {}
