import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ArticlesService } from './articles/articles.service';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    AppModule,
  );

  const service = application.get(ArticlesService);
  await service.fetchNewArticles();

  await application.close();
  process.exit(0);
}

bootstrap();
