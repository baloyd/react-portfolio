import React, { useState } from 'react';
import Navbar from './pages/Navbar';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

 
  const renderPage = () => {
   
    if (currentPage === 'Bio') {
      return <Bio />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
   
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
     
      {renderPage()}
    </div>
  );
}
