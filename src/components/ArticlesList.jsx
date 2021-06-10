import React from 'react'
import { ArticlesContainer } from '../styles/ArticlesList'
import Article from './Article'

const ArticlesList = (props) => {
  const { articleData } = props

  return (
    <>
      <ArticlesContainer>
        {articleData &&
          articleData.articles.map(function (article, index) {
            return <Article {...article} key={index} />
          })}
      </ArticlesContainer>
    </>
  )
}

export default ArticlesList
