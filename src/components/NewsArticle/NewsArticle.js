import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  let currentCategory = props.category;
  let articles;
  if(currentCategory === "") {
    articles = props.local;
  } else {
    articles = props[currentCategory];
  }

  if(props.filteredArticles.length > 0) {
    articles = props.filteredArticles;
  } else {
    console.log('No filtered articles')
  }

  return articles.map(article => {
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
