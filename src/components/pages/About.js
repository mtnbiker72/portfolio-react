import React from 'react';

const styles = {
  aboutStyle: {
    background: 'light-blue',
    justifyContent: 'flex-end',
    text: 'white',
    margin: '20px'
  },
};

export default function About() {
  return (
    <div style={styles.aboutStyle}>
      <div className="jumbotron">
        <img className="define-img" src="../grass.jpeg" alt="grass"></img>
      </div>

      <div className="card text-center">
        <div className="card-header">
          Heather Graham
        </div>
        <div className="card-body">
          <p className="card-text">
            Welcome to my homepage! My name is Heather Graham and thanks to the bootcamp program through DU I
            have made this webpage! I've been in the IT and telecom space for over 25 years. From Support to QA
            to Engineering, I've worked on some of the latest and greatest technologies.
            <br></br>
            <br></br>
            Currently I work as a Network Engineer for Comcast in the innovation wing. We develop applications for
            business customers and do small trials to judge interest levels. If it's a success, it's moved to other
            groups to maintain and add additional functionality. I've spend most of my career in the VoIP space. My
            most recent project was to integrate the open-sourced FreeSWITCH application into an Audio
            Conferencing solution for Comcast Business. It was a challenging project but very exciting to be
            part of.
            <br></br>
            <br></br>
            In addition to work, I enjoy a lot of activies. I love to spend time biking, hiking, skiing,
            camping, boating - really anything outside! With the pandemic allowing us to work from home, my
            husband and I have spent several months traveling around the country with our 2 dogs (Finley and
            Murphy). It was a great expereience that I look forward to doing more of.
          </p>
        </div>
      </div>
    </div>
  );
}
