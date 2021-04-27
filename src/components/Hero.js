import React from "react";
import fairtradeImage from "../assets/fairtrade-image.svg";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
    return (
        <div>
            <div className="hero">
                <h1>Fresh Food Wholesalers</h1>
                <p>Leeds-based food wholesalers and food cash and carry; serving the catering industry since 1977.</p>
                <Link to="/products">
                    <button>Explore our products &#62;</button>{" "}
                </Link>
                <img src={fairtradeImage} alt="fairtradeImage" />
            </div>
        </div>
    );
}

export default Hero;
