import React from "react";
import CustomerReviews from "../components/CustomerReviews";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import "./Home.scss";

function Home() {
    return (
        <div className="home-container">
            <Hero />
            <WhatWeDo />
            <CustomerReviews />
        </div>
    );
}

export default Home;
