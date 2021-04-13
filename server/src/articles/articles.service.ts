import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  private readonly logger = new Logger(ArticlesService.name);

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all articles`;
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
