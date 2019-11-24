import React from "react";
import Card from "./Card";

const darkModeSettings = {
    color: `rgb(233, 233, 233)`,
    backgroundColor: "rgb(23, 23, 35"
};

function Portfolio(props) {
    const darkStyling = props.darkMode ? darkModeSettings : null;
    return (
        <div className="portfolio-container" style={darkStyling}>
            <Card style={{ backgroundColor: "red" }} />
        </div>
    );
}

export default Portfolio;
