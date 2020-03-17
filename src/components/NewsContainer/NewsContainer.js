import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  return (
    <div className="news-container">
      <h1>Local News</h1>
      <NewsArticle localNews={props.localNews}/>
    </div>
  );
};

export default NewsContainer;
