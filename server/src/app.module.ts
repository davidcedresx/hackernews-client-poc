import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ScheduleModule.forRoot(), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
