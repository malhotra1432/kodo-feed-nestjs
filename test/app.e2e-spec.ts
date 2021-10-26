import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { FeedModule } from '../src/modules/feed.module';

describe('FeedController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FeedModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('ShouldReturn200ForHelloWorldApi', () => {
    return request(app.getHttpServer())
      .get('/api/v1/feeds')
      .expect(200)
      .expect('Hello World!');
  });
});
