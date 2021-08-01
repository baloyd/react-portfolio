import React from 'react';
import '../../styles/App.css';



function Navbar({currentPage, handlePageChange}) {
    return (
        <div>
        <header className="header">
          <h1 >Daniel Baloy</h1>
          <nav id="nav">
              <a href="#Bio"
               onClick={() => handlePageChange('Bio')}
                className=
                {currentPage === 'Bio' ? 'nav-active' : 'nav ' }  >
                    Bio</a>

              <a href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')} 
              className=
              {currentPage === 'Portfolio' ? 'nav-active' : 'nav'}>
                  Portfolio</a>

              <a href="#Contact"
               onClick={() => handlePageChange('Contact')}
                className=
                {currentPage === 'Contact' ? 'nav-active' : 'nav'}>
                    Contact</a>

              <a href="#Resume"
              onClick={() => handlePageChange('Resume')} 
              className=
                {currentPage === 'Resume' ? 'nav-active' : 'nav'}>
                    Resume</a>
          </nav>
      </header>
      <img className="banner" alt=""></img>
      </div>
    );
}


export default Navbar;