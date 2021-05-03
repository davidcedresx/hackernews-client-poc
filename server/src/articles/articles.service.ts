import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';

import { Article, ArticleDocument } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Model } from 'mongoose';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticlesService {
  private readonly logger = new Logger(ArticlesService.name);
  constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>, private httpService: HttpService) { }

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.articleModel.where("hidden").ne(true).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return this.articleModel.updateOne({ story_id: id }, { hidden: true }, { new: true });
  }

  @Cron(CronExpression.EVERY_HOUR)
  async fetchNewArticles() {
    interface Response {
      hits: ArticleDocument[]
    }

    this.logger.debug('worked started');
    const { hits: articles } = await this.httpService.get<Response>('https://hn.algolia.com/api/v1/search_by_date?query=nodejs').pipe(map(response => response.data)).toPromise()

    await this.articleModel.bulkWrite(articles.map(article => ({
      updateOne: {
        filter: { story_id: article.story_id },
        update: article,
        upsert: true,
      }
    })));

    this.logger.debug(`inserted ${articles.length} rows`)
  }
}
