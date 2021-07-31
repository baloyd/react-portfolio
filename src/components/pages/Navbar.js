import React from 'react';
import '../../styles/App.css';



function Navbar({currentPage, handlePageChange}) {
    return (
        <div>
        <header className="header">
          <h1 className="text-muted">Daniel Baloy</h1>
          <nav id="nav">
              <a href="#Bio"
               onClick={() => handlePageChange('Bio')}
                className=
                {currentPage === 'Bio' ? 'nav-link active' : 'nav-link'} >
                    Bio</a>

              <a href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')} 
              className=
              {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                  Portfolio</a>

              <a href="#Contact"
               onClick={() => handlePageChange('Contact')}
                className=
                {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact</a>

              <a href="#Resume"
              onClick={() => handlePageChange('Resume')} 
              className=
                {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume</a>
          </nav>
      </header>
      <img className="banner" alt=""></img>
      </div>
    );
}


export default Navbar;