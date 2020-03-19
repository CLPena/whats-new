import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology,
      category: ""
    }
  }

  changeDisplay = (category) => {
    this.setState({category: category});
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <Menu changeDisplay={this.changeDisplay}/>
        <NewsContainer local={this.state.local} entertainment={this.state.entertainment}
        health={this.state.health}
        science={this.state.science}
        technology={this.state.technology}
        category={this.state.category}
        />
      </div>
    );
  }
}

export default App;
