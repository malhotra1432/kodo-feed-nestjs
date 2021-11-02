import { CreateFeedCommand } from '../../command/create.feed.command';
import { FeedState } from '../../feed.state';

export interface FeedServiceInterface {
  storeFeed(createFeedCommands: Array<CreateFeedCommand>): Promise<void>;
  findAll(): Promise<Array<FeedState>>;
}
