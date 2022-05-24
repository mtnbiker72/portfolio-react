import React from 'react';

export default function Portfolio(props) {
    return (
        <div>
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src={props.project.pic} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.project.name} </h5>
                        <p className="card-text">{props.project.github}</p>
                        <p className="card-text">{props.project.deployed}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}