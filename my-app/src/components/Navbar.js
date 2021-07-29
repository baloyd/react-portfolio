import React from 'react';
import '../styles/App.css';

function Navbar() {
    return (
        <header class="header">
          <h1>Daniel Baloy</h1>
          <nav id="nav">
              <a href="#Bio">Bio</a>
              <a href="#Portfolio">Portfolio</a>
              <a href="#Contact">Contact</a>
              <a href="#Resume">Resume</a>
          </nav>
      </header>
    );
}


export default Navbar;