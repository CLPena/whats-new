import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor({changeDisplay}) {
    super();
    this.state = {
      category: ""
    }
  }

  changeCategory = (event) => {
    this.setState({category: event.target.id});
    event.preventDefault();
    this.props.changeDisplay(event.target.id)
    //need to change category on highest level and communicate change back down!
  }

  render () {
    return (
      <nav className="menu">
        <h1 className="menu-header">WHAT'S NEW?</h1>
        <button className="menu-button active-button" id="localNews" onClick={this.changeCategory}>LOCAL</button>
        <button className="menu-button" id="technologyNews" onClick={this.changeCategory}>TECHNOLOGY</button>
        <button className="menu-button" id="entertainmentNews" onClick={this.changeCategory}>ENTERTAINMENT</button>
        <button className="menu-button" id="scienceNews" onClick={this.changeCategory}>SCIENCE</button>
        <button className="menu-button" id="healthNews" onClick={this.changeCategory}>HEALTH</button>
      </nav>
    )
  }
}


export default Menu;
