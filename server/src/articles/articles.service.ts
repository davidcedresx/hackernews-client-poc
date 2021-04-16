import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';

import { Article, ArticleDocument } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Model } from 'mongoose';

@Injectable()
export class ArticlesService {
  private readonly logger = new Logger(ArticlesService.name);
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {}

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.articleModel.find().exec();
    // return Array(10).fill(undefined).map((_, i) => ({
    //   story_id: i,
    //   title: 'Fallback title',
    //   story_title: 'Main title',
    //   story_url: 'https://mainurl.com/',
    //   url: 'https://fallbackurl.com/',
    //   author: 'xxxx',
    //   created_at: "2021-04-13T01:20:31.000Z",
    // }));
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }

  @Cron('45 * * * * *')
  fetchNewArticles() {
    this.logger.debug('Called when the current second is 45');

    // fetch https://hn.algolia.com/api/v1/search_by_date?query=nodejs

    // response.hits.
    // title
    // story_title
    // story_utl
    // url
    // story_id

  }

}
