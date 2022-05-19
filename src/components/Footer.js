import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer className="text-center">
                <div className="container pt-4">
                    <section className="text-center mb-5">
                        <p>Twitter <FaTwitter /> </p>
                        <p>Github <FaGithub /> </p>
                        <p>Linkedin <FaLinkedin /> </p>
                    </section>
                </div>
            </footer>
        </div>

    );
}