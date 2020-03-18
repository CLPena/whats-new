import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  return (
    <div className="news-container">
      <h1>LOCAL:</h1>
      <NewsArticle localNews={props.localNews}
      entertainmentNews={props.entertainmentNews}
      healthNews={props.healthNews}
      scienceNews={props.scienceNews}
      technologyNews={props.technologyNews}
      category={props.category}/>
    </div>
  );
};

export default NewsContainer;
