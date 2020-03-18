import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  return (
    <div className="news-container">
      <h1>{props.category.toUpperCase() || 'LOCAL'} NEWS:</h1>
      <NewsArticle local={props.local}
      entertainment={props.entertainment}
      health={props.health}
      science={props.science}
      technology={props.technology}
      category={props.category}/>
    </div>
  );
};

export default NewsContainer;
