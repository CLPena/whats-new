import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
// import NewsArticle from '../NewsArticle/NewsArticle'



class App extends Component {
  constructor() {
    super();
    this.state = {
      localNews: local
    }
  }

  render () {
    return (
      <div className="app">
        <NewsContainer localNews={this.state.localNews} />
      </div>
    );
  }
}

//       {users.map(user => (
      //   <Tweet name={user.name} message={user.message} likes={user.likes} />
      // ))}

export default App;
