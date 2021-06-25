import React from 'react';
import Footer from '../Footer';

function Project() {

  return (
    <>
      <h1 className="body-header" id="portfolio-header">Portfolio</h1>
      <div className="body-top-container" id="instructions">Click on the images to see the live website</div>
      <div className="portfolio-container">
        <div className="inner-portfolio-container">
          <div className="gen-container">
            <a className="projects" id="project-1" href="https://richardyjkim.github.io/my-first-project/">
            </a>
            <a className="portfolio-link" href="https://github.com/richardyjkim/my-first-project">
              Baseball Pick Em <br/><img src="https://img.icons8.com/metro/26/000000/github.png"/>
            </a>
          </div>

          <div className="gen-container">
            <a className="projects" id="project-2" href="https://outcast-movie-quiz.herokuapp.com/">
            </a>
            <a className="portfolio-link" href="https://github.com/DevinPask/Outcast-Project">
              Box Office Quiz <br/><img src="https://img.icons8.com/metro/26/000000/github.png"/>
            </a>
          </div>

          <div className="gen-container">
            <a className="projects" id="project-3" href="https://the-tech-haven.herokuapp.com/">
            </a>
            <a className="portfolio-link" href="https://github.com/campbefs/campbell-tech-haven">
              Tech Haven Blog <br/><img src="https://img.icons8.com/metro/26/000000/github.png"/>
            </a>

          </div>

          <div className="gen-container">
            <a className="projects" id="project-4" href="https://campbefs.github.io/campbell-weather-dash/">
            </a>
            <a className="portfolio-link" href="https://github.com/campbefs/campbell-weather-dash">
              Weather Dashboard <br/><img src="https://img.icons8.com/metro/26/000000/github.png"/>
            </a>
          </div>

          <div className="gen-container">
            <a className="projects" id="project-5" href="https://campbefs.github.io/code-quiz-campbell/">
            </a>
            <a className="portfolio-link" href="https://github.com/campbefs/code-quiz-campbell">
              Work Day Scheduler <br/><img src="https://img.icons8.com/metro/26/000000/github.png"/>
            </a>
          </div>

          <div className="gen-container">
            <a className="projects" id="project-6" href="https://campbefs.github.io/campbell-calendar/">
            </a>
            <a className="portfolio-link" href="https://github.com/campbefs/campbell-calendar">
              Coding Quiz <br/><img src="https://img.icons8.com/metro/26/000000/github.png"/>
            </a>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
};

export default Project;