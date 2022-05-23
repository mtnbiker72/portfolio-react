import React from 'react';

export default function Portfolio(props) {
    return (
      <div>
        <p>
          {props.project.name}
          {props.project.pic}
          {props.project.github}
          {props.project.deployed}
        </p>
      </div>
    );
  }