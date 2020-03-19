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
  }

  render () {
    return (
      <nav className="menu">
        <h1 className="menu-header">WHAT'S NEW?</h1>
        <button className="menu-button" id="local" onClick={this.changeCategory}>LOCAL</button>
        <button className="menu-button" id="technology" onClick={this.changeCategory}>TECHNOLOGY</button>
        <button className="menu-button" id="entertainment" onClick={this.changeCategory}>ENTERTAINMENT</button>
        <button className="menu-button" id="science" onClick={this.changeCategory}>SCIENCE</button>
        <button className="menu-button" id="health" onClick={this.changeCategory}>HEALTH</button>
      </nav>
    )
  }
}


export default Menu;
