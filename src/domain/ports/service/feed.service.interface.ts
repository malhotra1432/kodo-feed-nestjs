import { CreateFeedCommand } from '../../command/create.feed.command';

export interface FeedServiceInterface {
  storeFeed(createFeedCommands: Array<CreateFeedCommand>): Promise<void>;
}
