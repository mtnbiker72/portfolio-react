import React from 'react';
import myResume from '../../../src/HeatherGraham.pdf'

const styles = {
  aboutStyle: {
    background: 'light-blue',
    justifyContent: 'flex-end',
    text: 'white',
    margin: '0px'
  },
  defineImg: {
    padding: 0,
    width: "100%",
    maxHeight: "400px"
  }
};

export default function Blog() {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6">

          <div class="card text-center border-success mb-3">
            <div class="card-header">Front End Skill</div>
            <div class="card-body text-success">
              <p class="card-text">HTML</p>
              <p class="card-text">CSS</p>
              <p class="card-text">JavaScript</p>
              <p class="card-text">JQuery</p>
              <p class="card-text">Mobile First Design</p>
              <p class="card-text">React</p>
            </div>
          </div>

          <div class="col-sm-6"></div>
          <div class="card text-center border-success mb-3">
            <div class="card-header">Back End Skills</div>
            <div class="card-body text-success">
              <p class="card-text">APIs</p>
              <p class="card-text">NodeJS</p>
              <p class="card-text">Express</p>
              <p class="card-text">MySQL/Sequalize</p>
              <p class="card-text">MongoDB, Mongoose</p>
              <p class="card-text">REST</p>
              <p class="card-text">GraphQL</p>
            </div>
          </div>
        </div>
      </div>
      <a class="btn btn-success" href={myResume} role="button">Link to My Resume</a>

    </div>
  );
}
