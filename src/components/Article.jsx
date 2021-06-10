import React from "react";
import {
  ArticleContainer,
  ArticleTitle,
  ArticleSource,
  ArticleLink,
  ArticleLeftSide,
  ArticleImage,
  ArticleDescription,
  ArticleDatePublished,
} from "../styles/Article";

const Article = ({ title, publishedAt, source, content, url, urlToImage }) => {
  return (
    <>
      <ArticleContainer>
        <ArticleLeftSide>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleDatePublished>{publishedAt}</ArticleDatePublished>
          <ArticleSource> {source.name}</ArticleSource>
          <ArticleLink href={url}> {url}</ArticleLink>
          <ArticleDescription>{content}</ArticleDescription>
        </ArticleLeftSide>
        <ArticleImage src={urlToImage} alt="Article Image" />
      </ArticleContainer>
    </>
  );
};

export default Article;
