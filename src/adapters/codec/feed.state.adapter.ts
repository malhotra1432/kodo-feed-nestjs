import { FeedDomain } from '../../domain/feed.domain';
import { FeedEntity } from '../entity/FeedEntity';
import { FeedState } from '../../domain/feed.state';
import { FeedImage } from '../../domain/value/feed.image';
import { Name } from '../../domain/value/name';
import { Description } from '../../domain/value/description';

export class FeedStateAdapter {
  encode(feedDomain: FeedDomain): FeedEntity {
    return {
      _id: undefined,
      name: feedDomain.getState().name.getName(),
      image: feedDomain.getState().image.getImage(),
      description: feedDomain.getState().description.getDescription(),
      dateLastEdited: feedDomain.getState().dateLastEdited,
    };
  }

  decode(feedEntity: FeedEntity): FeedState {
    return {
      name: Name.create(feedEntity.name),
      image: FeedImage.create(feedEntity.image),
      description: Description.create(feedEntity.description),
      dateLastEdited: feedEntity.dateLastEdited,
    };
  }
}
