import React from "react";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";

import "./Home.scss";

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="clear"></div>
                <Hero />
                <WhatWeDo />
                <CustomerReviews />
                {/* <TwitterFeed /> */}
            </div>
            <Footer />
        </>
    );
}

export default Home;
