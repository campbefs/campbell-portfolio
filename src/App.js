import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';


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
      </body>
    </>
  );
}

export default App;
