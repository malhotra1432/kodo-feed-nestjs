import { Module } from '@nestjs/common';
import { FeedController } from '../api/controllers/feed.controller';
import { FeedService } from '../domain/service/feed.service';

@Module({
  controllers: [FeedController],
  providers: [
    {
      provide: 'FeedServiceInterface',
      useClass: FeedService,
    },
  ],
})
export class FeedModule {}
