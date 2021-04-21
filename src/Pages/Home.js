import React from "react";
import "./Home.scss";

function Home() {
    // const cats = [
    //     "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx",
    //     "https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
    //     "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg",
    // ];

    // const node = document.getElementById("image-head");

    // const cycleImages = (images, container, step) => {
    //     images.forEach((image, index) =>
    //         setTimeout(() => {
    //             container.style.backgroundImage = `url(${image})`;
    //         }, step * (index + 1))
    //     );
    //     setTimeout(() => cycleImages(images, container, step), step * images.length);
    // };

    // cycleImages(cats, node, 1000);
    return (
        <div className="home-container">
            <div className="hero"></div>
            <div className="what-we-do">what we do</div>
        </div>
    );
}

export default Home;
