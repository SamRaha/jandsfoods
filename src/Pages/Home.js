import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import "./Home.scss";

function Home() {
    return (
        <div className="home-container">
            <Hero />
            <WhatWeDo />
        </div>
    );
}

export default Home;
