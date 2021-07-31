import React from 'react';
import '../../styles/App.css';



function Navbar() {
    return (
        <div>
        <header className="header">
          <h1 className="text-muted">Daniel Baloy</h1>
          <nav id="nav">
              <a href="#Bio" className="text-muted">Bio</a>
              <a href="#Portfolio" className="text-muted">Portfolio</a>
              <a href="#Contact" className="text-muted">Contact</a>
              <a href="#Resume" className="text-muted">Resume</a>
          </nav>
      </header>
      <img className="banner" alt=""></img>
      </div>
    );
}


export default Navbar;