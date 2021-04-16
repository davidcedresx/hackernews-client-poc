import { FC, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IArticle } from './declarations';
import "./articles.css";
import ArticleList from './ArticleList'

const Articles: FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const _fetch = async () => {
      setLoading(true);
      try {
        const { data: response } = (await axios.get(
          "http://backend:5000/articles/"
        )) as AxiosResponse<IArticle[]>;
        setArticles(response);
      } catch (e) {
        console.log("something went wrong", e);
      }
      setLoading(false);
    };

    _fetch();
  }, []);

  const handleRemove = async (articleId: number) => {
    console.log('decided to remove article with id', articleId)
    try {
      await axios.delete('http://backend:5000/articles/' + articleId.toString())
      setArticles(prevArticles => prevArticles.filter(article => article.story_id !== articleId))
    }
    catch(e) {
      console.log("something went wrong", e)
    }
    
  }

  return (
    <>
      <header>
        <div className="container">
          <h1 className="title">Hn Feed</h1>
          <p className="subtitle">We &lt;3 hacker news</p>
        </div>
      </header>
      <section>
        <div className="container" style={{ paddingTop: '1rem' }}>
          {loading ? <p>Loading</p> : <ArticleList articles={articles} onRemove={handleRemove} />}
        </div>
      </section>
    </>
  );
};

export default Articles;
