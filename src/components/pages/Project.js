import React from 'react';

export default function Portfolio(props) {
    return (
        <div>
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={props.project.pic} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">{props.project.name} </h5>
                        <p class="card-text">{props.project.github}</p>
                        <p class="card-text">{props.project.deployed}</p>
                    </div>
                </div>
                {/* <p>
                    {props.project.name}
                    {props.project.pic}
                    {props.project.github}
                    {props.project.deployed}
                </p> */}
            </div>
        </div>
    );
}