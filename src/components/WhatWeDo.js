import React from "react";
import "./WhatWeDo.scss";
import RightLeaves from "../assets/Right-Leaves.svg";
import LeftLeaves from "../assets/Left-Leaves.svg";

function WhatWeDo() {
    return (
        <div className="what-we-do-container">
            <div className="what-we-do-content">
                <div className="what-we-do-title">
                    <img src={LeftLeaves} className="left-leaves" alt="leftleaves" />
                    <h1>What We Do</h1>
                    <img src={RightLeaves} className="right-leaves" alt="rightleaves" />
                </div>
                <div className="blocks">
                    <div className="block">
                        <h4>Diverse Food Suppliers</h4>
                        <p>
                            Our diverse product range caters for all our customers, who range from small independent run cafes, street food vendors, festival vendors restaurants to multi-site school academies and local authorities. You can rest
                            assured that we can competitively provide wholesale foods and drinks to meet your business’s needs.
                        </p>
                    </div>
                    <div className="block">
                        <h4>Established and Reliable</h4>
                        <p>
                            We pride ourselves on the long-standing relationships we have built with our wholesale food suppliers, working with many of them for over 30 years. Our experience combined with our strong working relationships enable us to
                            provide the best quality wholesale foods for our customers at competitive prices.
                        </p>
                    </div>
                    <div className="block">
                        <h4>Product Sourcing</h4>
                        <p>
                            From our premium sourdough pizza balls to our vegan range, many of our products were sourced by us to meet our customers’ needs. Food tastes and trends are constantly evolving soif you can’t find what you’re looking for on
                            our product page, get in touch, you can guarantee we will go the extra mile to source it for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
