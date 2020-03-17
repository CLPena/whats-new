import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = () => {
  return (
    <div className="news-container">
      <p>FROM CONTAINER</p>
      <NewsArticle />
    </div>
  );
};

export default NewsContainer;
