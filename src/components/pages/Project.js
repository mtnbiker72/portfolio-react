import React from 'react';
import { FaGithub } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";

const styles = {
    picStyle: {
        maxWidth: '400px',
        maxHeight: '400px',
    },
    cardStyle: {
        textAlign: 'center',
        padding: '10px',
        fontSize: '20px',
        marginBottom: '20px'
    },
};

export default function Portfolio(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
            <div class="card" style={styles.cardStyle}>
                <img class="card-img-top" style={styles.picStyle} src={process.env.PUBLIC_URL + props.project.pic} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{props.project.name}</h5>
                    <a href={props.project.github} target="_blank">Github <FaGithub/></a>
                    <br></br>
                    <a href={props.project.deployed} target="_blank">Deployment <GrHeroku/></a>
                </div>
            </div>
        </div>
    );
}