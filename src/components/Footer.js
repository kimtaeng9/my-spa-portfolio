import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com/kimtaeng9">
                    <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="GitHub" className="social-icon" />
                </a>
            </div>
            <div className=" copyright">taeyeonkim @2024</div>
        </footer>
    )
}

export default Footer;