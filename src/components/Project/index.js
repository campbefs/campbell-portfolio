import React from 'react';

function Project() {

  return (
    <>
      <div id="instructions">Click on the images to see the live websites</div>
      <div class="portfolio-container">
        <div class="inner-portfolio-container">
          <a class="projects" id="project-1" href="https://richardyjkim.github.io/my-first-project/">
            <a class="portfolio-link" href="https://github.com/richardyjkim/my-first-project">Baseball Pick Em Github</a>
          </a>

          <a class="projects" id="project-2" href="https://outcast-movie-quiz.herokuapp.com/">
            <a class="portfolio-link" href="https://github.com/DevinPask/Outcast-Project">Box Office Quiz Github</a>
          </a>

          <a class="projects" id="project-3" href="https://the-tech-haven.herokuapp.com/">
            <a class="portfolio-link" href="https://github.com/campbefs/campbell-tech-haven">Tech Haven Github</a>
          </a>

          <a class="projects" id="project-4" href="https://campbefs.github.io/campbell-weather-dash/">
            <a class="portfolio-link" href="https://github.com/campbefs/campbell-weather-dash">Weather Dashboard Github</a>
          </a>

          <a class="projects" id="project-5" href="https://campbefs.github.io/code-quiz-campbell/">
            <a class="portfolio-link" href="https://github.com/campbefs/code-quiz-campbell">Work Day Scheduler Github</a>
          </a>

          <a class="projects" id="project-6" href="https://campbefs.github.io/campbell-calendar/">
            <a class="portfolio-link" href="https://github.com/campbefs/campbell-calendar">Coding Quiz Github</a>
          </a>

        </div>
      </div>
    </>
  )
};

export default Project;