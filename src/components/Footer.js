import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const styles = {
    footerSection: {
      display: 'inline-block',
      marginLeft: 'auto', 
      marginRight: 'auto'
    },
  };

export default function Footer() {
    return (
        <div>
            <footer className="text-center">
                <div className="container pt-4">
                    <section className="text-center mb-5" style={styles.footerSection}>
                        <span>
                            <a href ="https://twitter.com/mtnbiker72/" target="_blank">Twitter <FaTwitter /> </a>
                        </span>
                        <span>
                            <a href ="https://github.com/mtnbiker72/" target="_blank">Github <FaGithub /> </a>
                        </span>
                        <span>
                            <a href ="https://www.linkedin.com/in/heather-graham-88b1711/" target="_blank">LinkedIn <FaLinkedin /> </a>
                        </span>
                    </section>
                </div>
            </footer>
        </div>

    );
}