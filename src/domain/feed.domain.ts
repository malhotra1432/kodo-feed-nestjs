import { FeedState } from './feed.state';
import { CreateFeedCommand } from './command/create.feed.command';

export class FeedDomain {
  private readonly state: FeedState;

  constructor(state: FeedState) {
    this.state = state;
  }

  public static create(createFeed: CreateFeedCommand): FeedDomain {
    return this.stateToDomain(createFeed.toFeedState());
  }

  public static stateToDomain(feedState: FeedState): FeedDomain {
    return new FeedDomain(feedState);
  }
  getState(): FeedState {
    return this.state;
  }
}
