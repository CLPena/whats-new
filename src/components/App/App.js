import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology,
      category: "",
      filteredArticles: []
    }
  }

  changeDisplay = (category) => {
    this.setState({category: category});
    this.setState({filteredArticles: []});
  }

  searchArticles = (searchTerm) => {
    let matchingArticles;
    if(this.state.category === "") {
      matchingArticles = this.state.local.filter(article => article.headline.toUpperCase().includes(searchTerm.toUpperCase()))
    } else {
      matchingArticles = this.state[this.state.category].filter(article => article.headline.toUpperCase().includes(searchTerm.toUpperCase()))
    }
    this.setState({filteredArticles: matchingArticles})
  }

  render () {
    return (
      <div className="app">
        <SearchForm  category={this.state.category} filteredArticles={this.state.filteredArticles}
        searchArticles={this.searchArticles}/>
        <Menu changeDisplay={this.changeDisplay}/>
        <NewsContainer local={this.state.local}
        entertainment={this.state.entertainment}
        health={this.state.health}
        science={this.state.science}
        technology={this.state.technology}
        category={this.state.category}
        filteredArticles={this.state.filteredArticles}
        />
      </div>
    );
  }
}

export default App;
