import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form">
      <input placeholder="SEARCH ARTICLES"></input>
      <button class="search-button" type="submit"></button>
    </div>
  );
};

export default SearchForm;
