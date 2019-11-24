import React, { useState, useEffect } from "react";
import "./SASS/App.scss";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Success from "./Components/success";

const darkModeSettings = {
    color: `rgb(233, 233, 233)`,
    backgroundColor: "rgb(23, 23, 35"
};

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const darkStyle = darkMode ? darkModeSettings : null;

    useEffect(() => {
        const isDark = localStorage.getItem("dark-mode")
            ? localStorage.getItem("dark-mode")
            : false;
        setDarkMode(JSON.parse(isDark));
    }, []);
    return (
        <div style={darkStyle} className="App">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Route
                exact
                path="/"
                render={props => <About {...props} darkMode={darkMode} />}
            />
            <Route
                path="/portfolio"
                render={props => <Portfolio {...props} darkMode={darkMode} />}
            />
            <Route
                path="/contact"
                render={props => <Contact {...props} darkMode={darkMode} />}
            />
            <Route
                path="/success"
                render={props => <Success {...props} darkMode={darkMode} />}
            />
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}

export default App;
