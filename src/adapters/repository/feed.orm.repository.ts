import { EntityRepository, Repository } from 'typeorm';
import { FeedEntity } from '../entity/FeedEntity';

@EntityRepository(FeedEntity)
export class FeedOrmRepository extends Repository<FeedEntity> {}
