import React from 'react';
// Import static portfolio info from json file
import project from '../../static/portfolio.json'
import Project from './Project'

const styles = {
  portfolioStyle: {
    fontFamily: 'Noto Sans',
    fontSize: '25px',
    margin: '20px',
  },
  projectStle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))'
  }
}

export default function Portfolio() {
  return (
    <div>
      <div style={styles.portfolioStyle}>
        <p>
          Below are some of the projects I've completed:
        </p>
        <div style={styles.projectStle} >
          {project.map((project) => {
            return (<Project project={project} />)
          })
          }
        </div>
      </div>
    </div>
  );
}
