import React from 'react';
import myResume from '../../../src/HeatherGraham.pdf'

const styles = {
  resumeLink: {
    textAlign: 'center',
    margin: '15px'
  },
  resume: {
    margin: '15px',
  }
};

export default function Blog() {
  return (
    <div>
      <div style={styles.resume}>
        <div className="row">
          <div className="col-sm-4">
            <div className="card border-success">
              <div className="card-body text-success">
                <h5 className="card-title">Front End Skills</h5>
                <p className="card-text">* HTML</p>
                <p className="card-text">* CSS</p>
                <p className="card-text">* JavaScript</p>
                <p className="card-text">* HTML</p>
                <p className="card-text">* JQuery</p>
                <p className="card-text">* Mobile First Design</p>
                <p className="card-text">* React</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card border-success">
              <div className="card-body text-success">
                <h5 className="card-title">Back End Skills</h5>
                <p className="card-text">* APIs</p>
                <p className="card-text">* Node</p>
                <p className="card-text">* Express</p>
                <p className="card-text">* MySQL/Sequelize</p>
                <p className="card-text">* MongoDB/Mongoose</p>
                <p className="card-text">* REST</p>
                <p className="card-text">* GraphQL</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card border-success">
              <div className="card-body text-success">
                <h5 className="card-title">Dev/Ops Skills</h5>
                <p className="card-text">* Git</p>
                <p className="card-text">* Heroku Deployment</p>
                <p className="card-text">* Linux</p>
                <p className="card-text">* BASH Programming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <a className="btn btn-success text-center" style={styles.resumeLink} href={myResume} role="button">Link to My Resume</a>

        </div>

      </div>
    </div>
  );
}




