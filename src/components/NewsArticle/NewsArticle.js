import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props, category) => {
  let test;
  if(category = {}) {
    test = props.localNews
  } else {
    test = props[category]
  }
  return test.map(article => {
    return (
      <div key={article.id} className="news-article" id={article.id}>
        <h2>{article.headline}</h2>
        <img className="article-img" src={article.img} alt={article.headline}/>
        <p>{article.description}</p>
        <a href={article.url}>READ MORE</a>
      </div>
    )
  })
};


export default NewsArticle;
