import { Module } from '@nestjs/common';
import { FeedModule } from './feed.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/kodo'),
    FeedModule,
  ],
  providers: [],
})
export class AppModule {}
