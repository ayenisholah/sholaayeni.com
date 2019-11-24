import React from "react";
import Typist from "react-typist";
import { NavLink } from "react-router-dom";
import Sun from "../Assets/sun.png";
import Moon from "../Assets/moon.png";

function Header(props) {
    const symbol = props.darkMode ? Sun : Moon;

    const setDarkMode = () => {
        props.setDarkMode(!props.darkMode);
        localStorage.setItem("dark-mode", JSON.stringify(!props.darkMode));
    };
    return (
        <div className="header">
            <div className="header-container">
                <div className="title">
                    <h1>Shola Ayeni</h1>
                    <Typist
                        cursor={{
                            show: true,
                            blink: true,
                            element: "  |  ",
                            hideWhenDone: true
                        }}
                        startDelay={1000}
                    >
                        <span>I am a Software Developer</span>
                        <Typist.Backspace count={9} delay={2000} />
                        <span>Engineer</span>
                    </Typist>
                </div>
                <div className="menu">
                    <NavLink exact to="/">
                        About
                    </NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <div onClick={setDarkMode} className="button-container">
                        <img src={symbol} alt="sun" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
