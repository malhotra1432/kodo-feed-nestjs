import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity('FeedState')
export class FeedEntity {
  @ObjectIdColumn() _id: ObjectID;
  @Column() name: string;
  @Column() image: string;
  @Column() description: string;
  @Column() dateLastEdited: Date;

  // getName(): string {
  //   return this.name;
  // }
  //
  // getImage(): string {
  //   return this.image;
  // }
  //
  // getDescription(): string {
  //   return this.description;
  // }
  //
  // getDateLastEdited(): Date {
  //   return this.dateLastEdited;
  // }
}
