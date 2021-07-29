import React from 'react';
import '../styles/App.css';



function Navbar() {
    return (
        <div>
        <header className="header">
          <h1>Daniel Baloy</h1>
          <nav id="nav">
              <a href="#Bio">Bio</a>
              <a href="#Portfolio">Portfolio</a>
              <a href="#Contact">Contact</a>
              <a href="#Resume">Resume</a>
          </nav>
      </header>
      <img className="banner" alt=""></img>
      </div>
    );
}


export default Navbar;