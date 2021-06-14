import React, { useEffect, useState } from "react";
import fairtradeImage from "../assets/fairtrade-group.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Hero.scss";
import Arrow from "../assets/arrow-vector.svg";
import backgroundImage1 from "../assets/backgroundImage1.jpg";
import backgroundImage2 from "../assets/backgroundImage2.jpg";
import backgroundImage3 from "../assets/backgroundImage3.jpg";
import backgroundImage4 from "../assets/backgroundImage4.jpg";
import backgroundImage5 from "../assets/backgroundImage5.jpg";
import mobileBackground1 from "../assets/mobileBackground1.jpg";
import mobileBackground2 from "../assets/mobileBackground2.jpg";
import mobileBackground3 from "../assets/mobileBackground3.jpg";
import mobileBackground4 from "../assets/mobileBackground4.jpg";
import mobileBackground5 from "../assets/mobileBackground5.jpg";

function Hero() {
    const isMobile = useMediaQuery({ query: "(max-width: 1076px)" });

    const [imgState, setImgState] = useState({
        img: 0,
    });
    const imgArray = [backgroundImage5, backgroundImage1, backgroundImage3, backgroundImage4, backgroundImage2];
    const imgArrayMobile = [mobileBackground3, mobileBackground4, mobileBackground1, mobileBackground2, mobileBackground5];

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("This will run every second!");
            if (imgState.img === 4) {
                setImgState((prev) => ({
                    ...prev,
                    img: 0,
                }));
            } else {
                setImgState((prev) => ({
                    ...prev,
                    img: imgState.img + 1,
                }));
            }
            console.log(imgState.img);
            console.log(`url(${imgArray[imgState.img]})`);
        }, 7000);
        return () => clearInterval(interval);
    }, [imgState.img]);
    const preLoadedImage = [];
    useEffect(() => {
        imgArray.forEach((picture) => {
            const image = new Image();
            image.src = picture;
            window[image] = image;
            preLoadedImage.push(image);
        });
        console.log(preLoadedImage);
    }, []);

    return (
        <div>
            <div className="hero" style={isMobile ? { backgroundImage: `url(${imgArrayMobile[imgState.img]})` } : { backgroundImage: `url(${imgArray[imgState.img]})` }}>
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
