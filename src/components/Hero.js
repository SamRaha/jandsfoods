import React, { useEffect, useState } from "react";
import fairtradeImage from "../assets/fairtrade-group.png";
import { Link } from "react-router-dom";
import "./Hero.scss";
import Arrow from "../assets/arrow-vector.svg";
import backgroundImage1 from "../assets/backgroundImage1.jpg";
import backgroundImage2 from "../assets/backgroundImage2.jpg";
import backgroundImage3 from "../assets/backgroundImage3.jpg";
import backgroundImage4 from "../assets/backgroundImage4.jpg";
import backgroundImage5 from "../assets/backgroundImage5.jpg";

function Hero() {
    const [state, setState] = useState({
        img: 0,
    });
    const imgArray = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];
    const [imgPath, setimgPath] = useState(`url(${backgroundImage1})`);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("This will run every second!");
            if (state.img === 4) {
                setState((prev) => ({
                    ...prev,
                    img: 0,
                }));
            } else {
                setState((prev) => ({
                    ...prev,
                    img: state.img + 1,
                }));
            }
            console.log(state.img);
            console.log(`url(${imgArray[state.img]})`);
        }, 4000);
        return () => clearInterval(interval);
    }, [state.img]);

    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${imgArray[state.img]})` }}>
                {/* <div className="hero" style={{ backgroundImage: imgPath }}> */}
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
