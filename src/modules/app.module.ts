import { Module } from '@nestjs/common';
import { FeedModule } from './feed.module';

@Module({
  imports: [FeedModule],
  providers: [],
})
export class AppModule {}
