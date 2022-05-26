import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer className="text-center">
                <div> 
                    <section className="text-center mb-5" >
                        <a style={{ marginRight: '2.5rem' }} href="https://twitter.com/mtnbiker72/" target="_blank">Twitter <FaTwitter/></a>
                        <a style={{ marginRight: '2.5rem' }}  href="https://github.com/mtnbiker72/" target="_blank">Github <FaGithub/></a>
                        <a href="https://www.linkedin.com/in/heather-graham-88b1711/" target="_blank">LinkedIn <FaLinkedin/></a>
                    </section>
                </div>
            </footer>
        </div>

    );
}