import { Name } from '../value/name';
import { FeedImage } from '../value/feed.image';
import { Description } from '../value/description';
import { FeedState } from '../feed.state';

export class CreateFeedCommand {
  name: Name;
  image: FeedImage;
  description: Description;
  dateLastEdited: Date;

  constructor(
    name: Name,
    image: FeedImage,
    description: Description,
    dateLastEdited: Date,
  ) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.dateLastEdited = dateLastEdited;
  }

  public toFeedState(): FeedState {
    return {
      name: this.name,
      image: this.image,
      description: this.description,
      dateLastEdited: this.dateLastEdited,
    };
  }
}
