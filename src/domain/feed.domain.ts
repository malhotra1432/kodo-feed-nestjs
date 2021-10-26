import { Name } from './value/name';
import { FeedImage } from './value/feed.image';
import { Description } from './value/description';

export class FeedDomain {
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
}
