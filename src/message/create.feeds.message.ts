import { CreateFeedCommand } from '../domain/command/create.feed.command';
import { Name } from '../domain/value/name';
import { Description } from '../domain/value/description';
import { FeedImage } from '../domain/value/feed.image';

export class CreateFeedsMessage {
  name: string;
  image: string;
  description: string;
  dateLastEdited: Date;

  public static toCreateFeedCommand(
    createFeedsMessage: CreateFeedsMessage,
  ): CreateFeedCommand {
    return new CreateFeedCommand(
      Name.create(createFeedsMessage.name),
      FeedImage.create(createFeedsMessage.image),
      Description.create(createFeedsMessage.description),
      createFeedsMessage.dateLastEdited,
    );
  }
}
