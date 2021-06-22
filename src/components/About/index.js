import React from 'react';

function About(props) {

  return (
    <div className='about-body'>
      <h2>About Me</h2>
      <img id="photo" src="https://avatars.githubusercontent.com/u/72893700?v=4" alt="profile photo"/>      
      <p className="about-text">
        I am a burgeoning full stack web develop interesting in learning about new tools and technologies.
        <br/>
        <br/>
        My background is in operations and analytics. 
        I love working on the user experience aspect of products, and I am interesting in scaling 
        products to wide audience using the latest and greatest technologies, and leveraging data 
        to help make better decision making. 
        <br/>
        <br/>
        I am comfortable using HTML and CSS, and skilled in JavaScript, Python and SQL. I am at home building 
        front-end products, as well as working on backend systems and data infrastructure. 
        I have experience with Rest APIs, ETL/data pipelines, Node.js, mongoDB (NoSQL), ORM, ODM, webpack,
        Progressive Web Apps (PWAs), Git, and React.  
        <br/>
        <br/>
        This website was build using React.


      </p>
    </div>
  )
}

export default About;

