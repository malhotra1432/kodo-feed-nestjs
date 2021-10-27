import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('FeedDomainState')
export class FeedEntity {
  @ObjectIdColumn() _id: ObjectID;
  @Column() name: string;
  @Column() image: string;
  @Column() description: string;
  @Column() dateLastEdited: Date;
}
