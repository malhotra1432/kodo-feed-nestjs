import { FeedEntity } from '../../entity/FeedEntity';
import { readFile, writeFile } from 'fs/promises';
import { FeedJsonOrmRepository } from './feed.json.orm.repository';

export class FeedJsonRepository implements FeedJsonOrmRepository {
  async findAll(): Promise<Array<FeedEntity>> {
    const jsonData = await readFile('./feed.json');
    return JSON.parse(jsonData.toString());
  }

  async save(data: Array<FeedEntity>) {
    await writeFile('./feed.json', JSON.stringify(data), {
      encoding: 'utf8',
    });
  }
}
