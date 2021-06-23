import React from 'react';
import resume from '../../assets/resume/resume_swe.docx'
import Footer from '../Footer';

function Resume() {

  return (
  <section className='resume-container'>
    <h1>Resume</h1>

    <p>
      Download my <a href={`${resume}`} download>resume</a>
    </p>

    <div>
      <h3>Front-end Proficiencies</h3>
      <p class="bullets">
        <span>&#8226;</span> HTML
        <br/>
        <span>&#8226;</span> CSS
        <br/>
        <span>&#8226;</span> JavaScript
        <br/>
        <span>&#8226;</span> JQuery
        <br/>
        <span>&#8226;</span> Responsive Design
        <br/>
        <span>&#8226;</span> React
        <br/>
        <span>&#8226;</span> Bootstrap
        <br/>
        <span>&#8226;</span> Progressive Web Apps (PWA)
      </p>
      <h3>Back-end Proficiencies</h3>
      <p class="bullets">
        <span>&#8226;</span> Python
        <br/>
        <span>&#8226;</span> Rest APIs
        <br/>
        <span>&#8226;</span> Node.js
        <br/>
        <span>&#8226;</span> Express.js
        <br/>
        <span>&#8226;</span> MySQL/Sequelize
        <br/>
        <span>&#8226;</span> ETL/Data pipelines
        <br/>
        <span>&#8226;</span> NoSQL/MongoDB
        <br/>
        <span>&#8226;</span> GraphQL
        <br/>
        <span>&#8226;</span> Webpack
        <br/>
        <span>&#8226;</span> Git
      </p>
    </div>
    <Footer/>
  </section>
  )
}

export default Resume;