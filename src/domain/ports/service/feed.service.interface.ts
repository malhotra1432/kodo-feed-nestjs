import { CreateFeedCommand } from '../../command/create.feed.command';
import { FeedEntity } from '../../../adapters/entity/FeedEntity';

export interface FeedServiceInterface {
  storeFeed(createFeedCommands: Array<CreateFeedCommand>): Promise<void>;
  findAll(): Promise<Array<FeedEntity>>;
}
