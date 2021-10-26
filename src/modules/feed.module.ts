import { Module } from '@nestjs/common';
import { FeedController } from '../api/controllers/feed.controller';
import { FeedService } from '../domain/service/feed.service';
import { FeedRepository } from '../adapters/repository/feed.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Feed, FeedSchema } from '../adapters/schema/feed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feed.name, schema: FeedSchema }]),
  ],
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
