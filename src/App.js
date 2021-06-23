import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {

  const [pages] = useState([
    'About me',
    'Portfolio',
    'Contact',
    'Resume'
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <body>
        {currentPage === 'About me' && <About/>}
        {currentPage === 'Portfolio' && <Project/>}
        {currentPage === 'Contact' && <Contact/>}
      </body>
    </>
  );
}

export default App;
