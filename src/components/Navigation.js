import React from "react";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactForm">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;