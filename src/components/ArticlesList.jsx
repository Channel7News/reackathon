import React from "react";
import { ArticlesContainer } from "../styles/ArticlesList";
import Article from "./Article";

const ArticlesList = (props) => {
  const { articleData } = props;
  // console.log(articleData);

  return (
    <>
      <ArticlesContainer>
        {articleData &&
          articleData.articles.map(function (article) {
            return <Article {...article} />;
            // console.log(article);
          })}
      </ArticlesContainer>
    </>
  );
};

export default ArticlesList;
