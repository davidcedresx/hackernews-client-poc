import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ScheduleModule.forRoot(), MongooseModule.forRoot('mongodb://mongo:27017/hn-feed'), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
