import { Module } from '@nestjs/common';
import { FeedModule } from './feed.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedEntity } from '../adapters/entity/FeedEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: null,
      password: null,
      database: 'kodo',
      entities: [FeedEntity],
      synchronize: true,
    }),
    FeedModule,
  ],
  providers: [],
})
export class AppModule {}
