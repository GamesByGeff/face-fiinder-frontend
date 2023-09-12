import React from "react";
import Tilt from "react-parallax-tilt";
import GalaxyBrain from "./GalaxyBrain.jpg"
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height : 150, width: 150 }}>
                <div className="Tilt-inner">
                    <img style={{paddingTop: '5px'}} src={GalaxyBrain} alt="logo"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;