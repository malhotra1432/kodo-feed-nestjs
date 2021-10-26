import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FeedDocument = Feed & Document;

@Schema({ versionKey: false, collection: 'FeedState' })
export class Feed {
  @Prop()
  readonly name: string;
  @Prop()
  readonly image: string;
  @Prop()
  readonly description: string;
  @Prop()
  readonly dateLastEdited: Date;
}
export const FeedSchema = SchemaFactory.createForClass(Feed);
