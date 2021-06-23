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
        My background is in operations and analytics, and I have a passion for technical work. 
        I focus mostly on the user experience aspect of products, and enjoy helping scale 
        products to the delight of a wide audience. My core skills including leveraging data 
        to make better product decisions.  But I also love getting my hands dirty with programming and building products from scratch.
        <br/>
        <br/>
        I am comfortable using HTML and CSS, and skilled in JavaScript, Python and SQL. As a full-stack developer, I enjoy both building 
        front-end products, as well as working on backend systems and data infrastructure.
        <br/>
        <br/>
        My breadth of experience in technologies includes Rest APIs, ETL/data pipelines, Node.js, Express.js, mongoDB (NoSQL), ORM, ODM, webpack,
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

