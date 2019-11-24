import React from "react";
import { Link } from "react-router-dom";
import Me from "../Assets/shola-ayeni.jpg";

const darkModeSettings = {
    color: `rgb(233, 233, 233)`,
    backgroundColor: "rgb(23, 23, 35"
};

function About(props) {
    const darkStyling = props.darkMode ? darkModeSettings : null;
    return (
        <div style={darkStyling} className="about-container">
            <div className="about-left">
                <h2>
                    Hello!{" "}
                    <span role="img" aria-label="peace">
                        ✌🏾
                    </span>
                </h2>{" "}
                <p>
                    I am Shola, i'm passionate about clean energy technology,
                    Fintech, Blockchain Technology Artificial Intelligence and
                    Internet of Things technologies.{" "}
                </p>
                <p>
                    I have working knowledge in in Node, React, Redux, GraphQL,
                    Javascript, Python, MongoDB, Postgres, and a strong
                    engineering background from Lambda School.
                </p>
                <div class="button_cont" align="center">
                    <Link class="cta" to="/contact">
                        Start a conversation
                    </Link>
                </div>
            </div>
            <div className="about-right">
                <img src={Me} alt="Shola Ayeni" />
            </div>
        </div>
    );
}

export default About;
