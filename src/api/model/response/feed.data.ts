import { FeedState } from '../../../domain/feed.state';

export class FeedData {
  name: string;
  image: string;
  description: string;
  dateLastEdited: Date;

  static feedDataBuilder(feedState: FeedState): FeedData {
    return {
      name: feedState.name.getName(),
      image: feedState.image.getImage(),
      description: feedState.description.getDescription(),
      dateLastEdited: feedState.dateLastEdited,
    };
  }
}
