import React from 'react';
import myResume from '../../../src/HeatherGraham.pdf'

export default function Blog() {
  return (
    <div>
      <a href={myResume} download>Link to My Resume</a>
      <ul>
        Front End Skills:
         <li>HTML</li>  
         <li>CSS</li>  
         <li>JavaScript</li>  
         <li>JQuery</li>  
         <li>Mobile First Design</li>  
         <li>React</li>  
      </ul>
      <ul>
      Back End Skills:
         <li>APIs</li>  
         <li>NodeJS</li>  
         <li>Express</li>  
         <li>MySql, Sequalize</li>  
         <li>MongoDB, Mongoose</li>  
         <li>REST</li>  
         <li>GraphQL</li>  
      </ul>
    </div>
  );
}
