import React, { useEffect } from "react";
import fairtradeImage from "../assets/fairtrade-group.png";
import { Link } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import "./Hero.scss";
import Arrow from "../assets/arrow-vector.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backgroundImage1 from "../assets/backgroundImage1.jpg";
import backgroundImage2 from "../assets/backgroundImage2.jpg";
import backgroundImage3 from "../assets/backgroundImage3.jpg";
import backgroundImage4 from "../assets/backgroundImage4.jpg";
import backgroundImage5 from "../assets/backgroundImage5.jpg";
// import mobileBackground1 from "../assets/mobileBackground1.jpg";
// import mobileBackground2 from "../assets/mobileBackground2.jpg";
// import mobileBackground3 from "../assets/mobileBackground3.jpg";
// import mobileBackground4 from "../assets/mobileBackground4.jpg";
// import mobileBackground5 from "../assets/mobileBackground5.jpg";

function Hero() {
    // const isMobile = useMediaQuery({ query: "(max-width: 1076px)" });

    // const [imgState, setImgState] = useState({
    //     img: 0,
    // });
    const imgArray = [backgroundImage5, backgroundImage1, backgroundImage3, backgroundImage4, backgroundImage2];
    // const imgArrayMobile = [mobileBackground3, mobileBackground4, mobileBackground1, mobileBackground2, mobileBackground5];
    // console.log("imgArray: ", imgArray);
    // const preLoadedImage = [];
    useEffect(() => {
        imgArray.forEach((picture) => {
            const image = new Image();
            image.src = picture;
            window[image] = image;
            new Image().src = image;
        });
    }, []);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log("This will run every second!");
    //         if (imgState.img === 4) {
    //             setImgState((prev) => ({
    //                 ...prev,
    //                 img: 0,
    //             }));
    //         } else {
    //             setImgState((prev) => ({
    //                 ...prev,
    //                 img: imgState.img + 1,
    //             }));
    //         }
    //         console.log(imgState.img);
    //         console.log(`url(${imgArray[imgState.img]})`);
    //     }, 7000);
    //     return () => clearInterval(interval);
    // }, [imgState.img]);

    return (
        <div>
            <div className="carousel-div">
                <Carousel autoPlay showStatus={false} showThumbs={false} swipeable showArrows emulateTouch infiniteLoop interval={7000}>
                    <div className="carousel-img img1"></div>
                    <div className="carousel-img img2"></div>
                    <div className="carousel-img img3"></div>
                    <div className="carousel-img img4"></div>
                    <div className="carousel-img img5"></div>
                </Carousel>
            </div>
            {/* <div className="hero" style={isMobile ? { backgroundImage: `url(${imgArrayMobile[imgState.img]})` } : { backgroundImage: `url(${imgArray[imgState.img]})` }}> */}
            <div className="hero-container">
                <div className="hero">
                    <h1>Fresh Food Wholesalers</h1>
                    <p>Leeds-based food wholesalers; serving the catering industry since 1977.</p>
                    <Link to="/products">
                        <button className="products-button">
                            Explore our products <img src={Arrow} alt="" />
                        </button>
                    </Link>
                    <img className="fairtrade" src={fairtradeImage} alt="fairtradeImage" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
