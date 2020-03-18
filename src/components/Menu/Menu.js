import React, { Component } from 'react';
import './Menu.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      localNews: local,
      entertainmentNews: entertainment,
      healthNews: health,
      scienceNews: science,
      technologyNews: technology
    }
  }

  handleMenuButtons = (event) => {
    event.preventDefault();
    NewsArticle(this.state, event.target.id);
  }

  render () {
    return (
      <nav className="menu">
        <h1 className="menu-header">WHAT'S NEW?</h1>
        <button className="menu-button active-button" id="localNews" onClick={this.handleMenuButtons}>LOCAL NEWS</button>
        <button className="menu-button" id="technologyNews" onClick={this.handleMenuButtons}>TECHNOLOGY</button>
        <button className="menu-button" id="entertainmentNews" onClick={this.handleMenuButtons}>ENTERTAINMENT</button>
        <button className="menu-button" id="scienceNews" onClick={this.handleMenuButtons}>SCIENCE</button>
        <button className="menu-button" id="healthNews" onClick={this.handleMenuButtons}>HEALTH</button>
      </nav>
    )
  }
}


export default Menu;
