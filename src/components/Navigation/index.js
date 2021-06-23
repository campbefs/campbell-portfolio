import React, { useEffect } from 'react';


function Navigation(props) {

  const {
    currentPage,
    setCurrentPage
  } = props;

  return (
    
    <nav className="nav-links">
      <p className={`link ${'About me' === currentPage && 'nav-active'}`} id="about-me">
        {/* <a class="nav-link" href="./" onClick={() => setCurrentPage('About me')}>About me</a> */}
        <span class="nav-link" onClick={() => setCurrentPage('About me')}>About me</span>
      </p>
      <p className={`link ${'Portfolio' === currentPage && 'nav-active'}`} id="portfolio">
        {/* <a class="nav-link" href="./" onClick={() => setCurrentPage('Portfolio')}>Portfolio</a> */}
        <span class="nav-link" onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
      </p>
      <p className={`link ${'Contact' === currentPage && 'nav-active'}`} id="contact">
        {/* <a class="nav-link" href="./" onClick={() => setCurrentPage('Contact')}>Contact</a> */}
        <span class="nav-link" onClick={() => setCurrentPage('Contact')}>Contact</span>
      </p>
      <p className={`link ${'Resume' === currentPage && 'nav-active'}`} id="resume">
        {/* <a class="nav-link" href="./" onClick={() => setCurrentPage('Resume')}>Resume</a> */}
        <span class="nav-link" onClick={() => setCurrentPage('Resume')}>Resume</span>
      </p>
  </nav>

  );
}

export default Navigation;

