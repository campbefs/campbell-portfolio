import React, { useEffect } from 'react';


function Navigation(props) {

  const {
    currentPage,
    setCurrentPage
  } = props;

  return (
    
    <nav className="nav-links">
      <p className={`link ${'About me' === currentPage && 'nav-active'}`} id="about-me">
        <span className="nav-link" onClick={() => setCurrentPage('About me')}>About me</span>
      </p>
      <p className={`link ${'Portfolio' === currentPage && 'nav-active'}`} id="portfolio">
        <span className="nav-link" onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
      </p>
      <p className={`link ${'Contact' === currentPage && 'nav-active'}`} id="contact">
        <span className="nav-link" onClick={() => setCurrentPage('Contact')}>Contact</span>
      </p>
      <p className={`link ${'Resume' === currentPage && 'nav-active'}`} id="resume">
        <span className="nav-link" onClick={() => setCurrentPage('Resume')}>Resume</span>
      </p>
  </nav>

  );
}

export default Navigation;

