import { FeedDomainRepository } from '../../domain/ports/repository/feed.domain.repository';
import { FeedDomain } from '../../domain/feed.domain';
import { InjectModel } from '@nestjs/mongoose';
import { Feed, FeedDocument } from '../schema/feed.schema';
import { Model } from 'mongoose';

export class FeedRepository implements FeedDomainRepository {
  constructor(
    @InjectModel(Feed.name)
    private readonly feedsSchemaModel: Model<FeedDocument>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async storeFeed(feedDomain: FeedDomain): Promise<void> {
    const newFeed = new this.feedsSchemaModel(
      FeedRepository.toCreateFeed(feedDomain),
    );
    await newFeed.save();
  }

  private static toCreateFeed(feedDomain: FeedDomain): Feed {
    return {
      name: feedDomain.name.getName(),
      image: feedDomain.image.getImage(),
      description: feedDomain.description.getDescription(),
      dateLastEdited: feedDomain.dateLastEdited,
    };
  }
}
