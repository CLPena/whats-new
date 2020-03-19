import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <input placeholder="SEARCH ARTICLES"></input>
      <button class="search-button" type="submit"></button>
    </form>
  );
};

export default SearchForm;
