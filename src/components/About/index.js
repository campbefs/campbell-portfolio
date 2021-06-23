import React from 'react';

function About() {

  return (
    <div className='about-body'>
      <h2>About Me</h2>
      <img id="photo" src="https://avatars.githubusercontent.com/u/72893700?v=4" alt="profile photo"/>      
      <p className="about-text">
        I am a burgeoning full-stack web develop interested in mastering the latest tools and technologies.
        <br/>
        <br/>
        My background is in operations and analytics. 
        I focus mostly on the user experience aspect of products, and enjoy helping scale 
        products to the delight of a wide audience. I am great at leveraging data 
        to make better decisions.  But I also love getting my hands dirty with programming 
        just as much as optimizing existing products using data.
        <br/>
        <br/>
        I am comfortable using HTML and CSS, and skilled in JavaScript, Python and SQL. I enjoy building 
        front-end products, as well as working on backend systems and data infrastructure.
        <br/>
        <br/>
        My breadth of experience in technologies includes Rest APIs, ETL/data pipelines, Node.js, mongoDB (NoSQL), ORM, ODM, webpack,
        Progressive Web Apps (PWAs), Git, and React.  
        <br/>
        <br/>
        This website was built using React.
      </p>
      <div class="bottom-link-container">
        <a class="bottom-link" href="github.com/campbefs">
          <img src="https://img.icons8.com/ios/50/000000/github--v2.png" alt="github link"/>        
        </a>
        <a class="bottom-link" href="https://www.linkedin.com/in/christopher-campbell-8000b420/">
          <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin link"/>
        </a>
      </div>
    </div>
  )
}

export default About;

