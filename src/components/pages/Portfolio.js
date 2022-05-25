import React from 'react';
import portfolio from '../../static/portfolio.json'
import Project from './Project'

const styles = {
  portfolioStyle: {
    fontFamily: 'Noto Sans', 
    fontSize: '25px',
    margin: '20px',
  },
}

export default function Portfolio() {
  return (
    <div>
      <div style={styles.portfolioStyle}> 
      <p>
        Below are some of the projects I've completed:
      </p>
      { portfolio.map((project) => {
        return (<Project project={project}/>)
      })
    }
    </div>
    </div>
  );
}
