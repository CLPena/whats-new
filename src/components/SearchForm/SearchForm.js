import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: '',
      filteredArticles: props.filteredArticles,
      category:''
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({category: this.props.category});
    this.props.searchArticles(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render () {
    return (
      <form className="search-form">
        <input type="text" name="search" placeholder="SEARCH ARTICLES" onChange={this.handleChange} value={this.state.searchTerm}></input>
        <button className="search-button" type="submit" onClick={this.handleSearch}></button>
      </form>
    );
  }

}

export default SearchForm;
