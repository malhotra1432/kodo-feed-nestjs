import { FeedEntity } from '../entity/FeedEntity';
import { readFile, writeFile } from 'fs/promises';

export class FeedJsonRepository {
  static async save(data: Array<FeedEntity>) {
    await writeFile('./feed.json', JSON.stringify(data), {
      encoding: 'utf8',
    });
  }

  static async findAll(): Promise<Array<FeedEntity>> {
    const jsonData = await readFile('./feed.json');
    return JSON.parse(jsonData.toString());
  }
}
