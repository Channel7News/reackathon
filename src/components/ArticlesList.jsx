import React from "react";
import { ArticlesContainer } from "../styles/ArticlesList";
import Article from "./Article";

const ArticlesList = (props) => {
  const { articleData } = props;

  return (
    <>
      <ArticlesContainer>
        {articleData.articles.map(function (article) {
          <Article article={article} />;
        })}
      </ArticlesContainer>
    </>
  );
};

export default ArticlesList;
