import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
      <nav className="menu">
        <h1 className="menu-header">WHAT'S NEW?</h1>
        <button className="menu-button local-button active-button">LOCAL NEWS</button>
        <button className="menu-button technology-button">TECHNOLOGY</button>
        <button className="menu-button entertainment-button">ENTERTAINMENT</button>
        <button className="menu-button science-button">SCIENCE</button>
        <button className="menu-button health-button">HEALTH</button>
      </nav>
    )
};


export default Menu;
