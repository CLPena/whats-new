import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      localNews: local,
      entertainmentNews: entertainment,
      healthNews: health,
      scienceNews: science,
      technologyNews: technology,
      category: ""
    }
  }

  changeDisplay = (category) => {
    this.setState({category: category});
  }

  render () {
    return (
      <div className="app">
        <Menu changeDisplay={this.changeDisplay}/>
        <NewsContainer localNews={this.state.localNews} entertainmentNews={this.state.entertainmentNews}
        healthNews={this.state.healthNews}
        scienceNews={this.state.scienceNews}
        technologyNews={this.state.technologyNews}
        category={this.state.category}
        />
      </div>
    );
  }
}

export default App;
