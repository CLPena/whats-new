import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  searchArticles = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm)
  }

  render () {
    return (
      <form className="search-form">
        <input type="text" name="search" placeholder="SEARCH ARTICLES" onChange={this.handleChange}></input>
        <button className="search-button" type="submit" onClick={this.searchArticles}></button>
      </form>
    );
  }

}

export default SearchForm;
