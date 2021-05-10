import React from "react";
import fairtradeImage from "../assets/fairtrade-group.png";
import { Link } from "react-router-dom";
import "./Hero.scss";
import Arrow from "../assets/arrow-vector.svg";

function Hero() {
    return (
        <div>
            <div className="hero">
                <h1>Fresh Food Wholesalers</h1>
                <p>Leeds-based food wholesalers and food cash and carry; serving the catering industry since 1977.</p>
                <Link to="/products">
                    <button className="products-button">
                        Explore our products <img src={Arrow} alt="" />
                    </button>{" "}
                </Link>
                <img className="fairtrade" src={fairtradeImage} alt="fairtradeImage" />
            </div>
        </div>
    );
}

export default Hero;
