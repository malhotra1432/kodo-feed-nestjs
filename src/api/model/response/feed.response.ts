import { FeedData } from './feed.data';
import { FeedState } from '../../../domain/feed.state';

export class FeedResponse {
  data: FeedData[];

  public static feedResponseBuilder(feedStateList: FeedState[]): FeedResponse {
    const feedDataList = [];
    for (const feedState of feedStateList) {
      feedDataList.push(FeedData.feedDataBuilder(feedState));
    }
    return {
      data: feedDataList,
    };
  }
}
