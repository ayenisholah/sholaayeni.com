import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="social-links">
                <a
                    href="https://github.com/ayenisholah"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/ayenishola/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:ayenisholah@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaEnvelope />
                </a>
            </div>
            <p>
                {" "}
                Designed by Shola Ayeni{" "}
                <span role="img" aria-label="Developer">
                    {" "}
                    👨🏾‍💻
                </span>{" "}
                &copy; {new Date().getFullYear()}
            </p>
        </div>
    );
}
