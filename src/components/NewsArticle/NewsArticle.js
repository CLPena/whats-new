import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  let x = props.category;
  console.log(x)
  let test;
  if(x === "") {
    test = props.localNews;
    console.log('test:', test)
  } else {
    test = props[x];
    console.log('propsx:', props[x])
  }

  return <div></div>
  // return test.map(article => {
  //   return (
  //     <div key={article.id} className="news-article" id={article.id}>
  //       <h2>{article.headline}</h2>
  //       <img className="article-img" src={article.img} alt={article.headline}/>
  //       <p>{article.description}</p>
  //       <a href={article.url}>READ MORE</a>
  //     </div>
  //   )
  // })
};


export default NewsArticle;
