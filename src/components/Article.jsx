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

const Article = ({ title, publishedAt, source, content, url, image }) => {
  return (
    <>
      <ArticleContainer>
        <ArticleLeftSide>
          <ArticleTitle><ArticleLink href={url} target="_blank">{title}</ArticleLink></ArticleTitle>
          <ArticleDatePublished><ArticleSource>{publishedAt.substring(0,10)} - {source.name}</ArticleSource></ArticleDatePublished>
          <ArticleDescription>{content}</ArticleDescription>
        </ArticleLeftSide>
        <ArticleImage src={image} alt={title} />
      </ArticleContainer>
    </>
  );
};

export default Article;
