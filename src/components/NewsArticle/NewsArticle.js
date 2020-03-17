import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return props.localNews.map(article => {
    return (
      <div className="news-article" id={article.id}>
        <h2>{article.headline}</h2>
        <img className="article-img" src={article.img} />
        <p>{article.description}</p>
        <a href={article.url}>READ MORE</a>
      </div>
    )
  })
};


export default NewsArticle;
