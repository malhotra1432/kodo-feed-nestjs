import { CreateFeedCommand } from '../../command/create.feed.command';

export interface FeedServiceInterface {
  getHello(): string;
  storeFeed(createFeedCommands: Array<CreateFeedCommand>): Promise<void>;
}
