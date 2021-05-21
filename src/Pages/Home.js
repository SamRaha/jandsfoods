import React from "react";
import Contact from "../components/Contact";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TwitterFeed from "../components/TwitterFeed";
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
                {/* <Contact /> */}
                <TwitterFeed />
            </div>
            <Footer />
        </>
    );
}

export default Home;
