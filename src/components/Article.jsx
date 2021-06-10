import React from "react";
import {
  ArticleContainer,
  ArticleTitle,
  ArticleSource,
  ArticleLeftSide,
  ArticleImage,
  ArticleDescription,
  ArticleDatePublished,
} from "../styles/Article";

const Article = (article) => {
  const { title, publishedAt, content, source, url, urlToImage } = article;

  return (
    <>
      <ArticleContainer>
        <ArticleLeftSide>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDatePublished>{publishedAt}</ArticleDatePublished>
          <ArticleSource>
            `${source.name}${url}`
          </ArticleSource>
          <ArticleDescription>{content}</ArticleDescription>
        </ArticleLeftSide>
        <ArticleImage src={urlToImage} alt="Article Image" />
      </ArticleContainer>
    </>
  );
};

export default Article;
