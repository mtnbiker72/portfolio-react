import React from 'react';
import portfolio from '../../static/portfolio.json'
import Project from './Project'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        Below are some of the projects I've completed:
      </p>
      { portfolio.map((project) => {
        return (<Project project={project}/>)
      })
    }
    </div>
  );
}
