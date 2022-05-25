import React from 'react';
import image1 from '../../static/ocean.jpg';
import self from '../../static/self.JPG';

const styles = {
  aboutStyle: {
    background: 'light-blue',
    fontFamily: 'Noto Sans', 
    justifyContent: 'flex-end',
    text: 'white',
    margin: '0px',
  },
  defineImg: {
    padding: 0,
    width: "100%",
    maxHeight: "300px"
  },
  defineSelf: {
    padding: 0,
    maxHeight: "400px"
  },
  bodyStyle: {
    margin: '25px',
    fontSize: '20px'
  }
};

export default function About() {
  return (
    <div style={styles.aboutStyle}>
      <div className="jumbotron" style={styles.defineImg}>
        <img className="defineImg" style={styles.defineImg} src={image1} alt="grass"></img>
      </div>

      <div className="card text-center" style={styles.background}>
        <div className="card-header">
          Heather Graham
        </div>

        <div className="row" style={styles.bodyStyle}>
          <div className="col-sm-6">
            <div className="card-body" >
              <p className="card-text">
                Welcome to my homepage! My name is Heather Graham and thanks to the bootcamp program through DU I
                have made this webpage! I've been in the IT and telecom space for over 25 years. From Support to QA
                to Engineering, I've worked on some of the latest and greatest technologies.
                <br></br>
                <br></br>
                Currently I work as a Principle Network Engineer for Comcast in the innovation division. We develop 
                applications for business customers and do small trials to judge interest level. If it's a success, 
                it's moved to other groups to maintain and add additional functionality. I've spend most of my 
                career in the VoIP space. My most recent project was to integrate the open-sourced FreeSWITCH 
                application into an Audio Conferencing solution for Comcast Business. It was a challenging project 
                but very exciting to be part of.
                <br></br>
                <br></br>
                In addition to work, I enjoy a lot of activies. I love to spend time biking, hiking, skiing,
                camping, boating - really anything outside! With the pandemic allowing us to work from home, my
                husband and I have spent several months traveling around the country with our 2 dogs (Finley and
                Murphy). It was a great expereience that I look forward to doing more of.
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card-body">
              <p className="card-text">
              <img className="defineImg" style={styles.defineSelf} src={self} alt="grass"></img>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
