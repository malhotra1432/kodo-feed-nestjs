import { FeedDomain } from '../feed.domain';
import { Name } from '../value/name';
import { FeedImage } from '../value/feed.image';
import { Description } from '../value/description';

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

  public static toCreateFeed(createFeedCommand: CreateFeedCommand): FeedDomain {
    return new FeedDomain(
      createFeedCommand.name,
      createFeedCommand.image,
      createFeedCommand.description,
      createFeedCommand.dateLastEdited,
    );
  }
}
