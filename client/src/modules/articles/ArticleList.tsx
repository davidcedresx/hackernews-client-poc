import { FC, useMemo } from "react";
import { IArticle } from "./declarations";
import TrashSvg from "../../trash.svg";
import "./articleList.css";

interface Props {
  articles: IArticle[];
  onRemove: (id: number) => void;
}

const ArticleList: FC<Props> = (props: Props) => {
  const articles = useMemo(
    () =>
      props.articles.filter((article) => article.story_title || article.title),
    [props.articles]
  );

  const formatDate = (raw_datetime: string) => {
    return "yesterday";
  };

  return (
    <>
      {articles.map((article) => (
        <div key={article.story_id}>
          <div className="row">
            <a
              className="article-link"
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              <p>{article.story_title || article.title}</p>
              <p className="author">- {article.author} -</p>
              <div style={{ flex: 1 }} /> {/* expander */}
            </a>
            <p>{formatDate(article.created_at)}</p>
            <img
              className="trash-icon"
              src={TrashSvg}
              alt="delete"
              height={16}
              onClick={() => props.onRemove(article.story_id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticleList;
