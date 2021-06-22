import React, { useEffect } from 'react';

function Header(props) {

  return (
    
    <header className="nav">
      <h2 className="main-text">
        Campbell
      </h2>
      <nav>
        <p className="about-me">About me</p>
        <p className="portfolio">Portfolio</p>
        <p className="contact">Contact</p>
        <p className="resume">Resume</p>
      </nav>
    </header>

  );
}

export default Header;