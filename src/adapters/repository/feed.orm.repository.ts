import { EntityRepository, Repository } from 'typeorm';
import { FeedEntity } from '../entity/FeedEntity';
import { readFile, writeFile } from 'fs/promises';

@EntityRepository(FeedEntity)
export class FeedOrmRepository extends Repository<FeedEntity> {
  public async saveDataToJsonFile(data: Array<FeedEntity>) {
    await writeFile('./feed.json', JSON.stringify(data), {
      encoding: 'utf8',
    });
  }

  async findAll(): Promise<Array<FeedEntity>> {
    const jsonData = await readFile('./feed.json');
    return JSON.parse(jsonData.toString());
  }
}
