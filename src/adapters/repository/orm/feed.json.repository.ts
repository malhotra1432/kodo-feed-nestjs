import { FeedEntity } from '../../entity/FeedEntity';
import { readFile, writeFile } from 'fs/promises';
import { FeedJsonOrmRepository } from './feed.json.orm.repository';
import { HttpException, HttpStatus } from '@nestjs/common';

export class FeedJsonRepository implements FeedJsonOrmRepository {
  async findAll(): Promise<Array<FeedEntity>> {
    const jsonData = await readFile('./feed.json');
    try {
      return JSON.parse(jsonData.toString());
    } catch (e) {
      throw new HttpException(
        'Unable to read json file ' + e,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async save(data: Array<FeedEntity>) {
    try {
      await writeFile('./feed.json', JSON.stringify(data), {
        encoding: 'utf8',
      });
    } catch (e) {
      throw new HttpException(
        'Unable to write json file ',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
