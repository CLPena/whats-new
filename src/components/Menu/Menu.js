import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor() {
    super();

  }

  handleMenuButtons = (event) => {
    console.log(event.target.id)
  }

  render () {
    return (
      <nav className="menu">
        <h1 className="menu-header">WHAT'S NEW?</h1>
        <button className="menu-button local-button" id="active-button" onClick={this.handleMenuButtons}>LOCAL NEWS</button>
        <button className="menu-button" id="technology-button" onClick={this.handleMenuButtons}>TECHNOLOGY</button>
        <button className="menu-button" id="entertainment-button" onClick={this.handleMenuButtons}>ENTERTAINMENT</button>
        <button className="menu-button" id="science-button" onClick={this.handleMenuButtons}>SCIENCE</button>
        <button className="menu-button" id="health-button" onClick={this.handleMenuButtons}>HEALTH</button>
      </nav>
    )
  }

};


export default Menu;
