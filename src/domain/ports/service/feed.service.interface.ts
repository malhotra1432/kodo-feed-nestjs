import { CreateFeedCommand } from '../../command/create.feed.command';

export interface FeedServiceInterface {
  getHello(): string;
  storeFeed(createFeedCommand: CreateFeedCommand): Promise<void>;
}
