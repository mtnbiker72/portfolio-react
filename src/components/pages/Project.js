import React from 'react';
import { FaGithub } from "react-icons/fa";
import { GrHeroku } from "react-icons/gr";

const styles = {
    picStyle: {
        maxWidth: '400px',
        maxHeight: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px'
    },
    cardStyle: {
        textAlign: 'center',
        padding: '10px',
        fontSize: '20px',
        height: '90%',
        border: 'solid 5px gainsboro',
        marginBottom: '20px'
    },
    boxStyle: {
        height: '100%',
        margin: '20px'
    },
};

// Show different projects with links to github and deployment site
export default function Project(props) {
    return (
        <div style={styles.boxStyle}>
            <div class="card text-center" style={styles.cardStyle}>
                <img class="card-img-top" style={styles.picStyle} src={process.env.PUBLIC_URL + props.project.pic} alt="Project Pic"></img>
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