import React from "react";
import RightLeaves from "../assets/Right-Leaves.svg";
import LeftLeaves from "../assets/Left-Leaves.svg";
import Footer from "../components/Footer";
import "./DeliveryAndServices.scss";
import MixedFruitsRight from "../assets/mixed-fruits-right.svg";
import MixedFruitsLeft from "../assets/mixed-fruits-left.svg";
function DeliveryAndServices() {
    return (
        <div>
            <div className="clear"></div>
            <div className="delivery-and-services-container">
                <div className="delivery-and-services-content">
                    <div className="delivery-and-services-title">
                        <img src={LeftLeaves} className="left-leaves" alt="leftleaves" />
                        <h1>Delivery and Services</h1>
                        <img src={RightLeaves} className="right-leaves" alt="rightleaves" />
                    </div>
                    <div className="blocks">
                        <div className="block">
                            <h4>Our Food Service Delivery Team</h4>
                            <p>
                                The team here at J and S Foods has been hand-picked to ensure you get the best service every single time. You are likely to get to know your delivery team pretty well, and they will always go the extra mile to
                                guarantee we meet your wholesale food needs. <br></br>
                                <br></br> Nothing is ever too much trouble, so get in touch today and we will show you how food service deliveries should be.
                            </p>
                            <p></p>
                        </div>
                        <div className="block">
                            <h4>Reliable, Flexible and Responsive</h4>
                            <p>
                                Reliable, flexible, responsive food service delivery is what we do best, and we pride ourselves on the fact that we will go the extra mile to get your wholesale food order to you exactly when you need it. <br></br>
                                <br></br>We deliver all our fresh, frozen and ambient wholesale food products from our multi-purpose vehicles, so you will never have to wait around for separate deliveries. <br></br>
                                <br></br> Our delivery schedules are completely flexible to ensure you get your wholesale food items when it suits you. So, if your schedule changes, we will change with you; that is what makes us one of the most
                                reliable and adaptable food service delivery companies in Leeds.
                            </p>
                        </div>
                        <div className="block">
                            <h4>Areas We Cover</h4>
                            <p>
                                We cover most of Yorkshire and travel as far as Manchester, Liverpool and Newcastle for our larger customers. We like to build long standing relationships with our customers, however, if you require a one off delivery
                                get in touch and we will be happy to help.
                            </p>
                        </div>
                    </div>
                    <img className="mixed-fruits-left" src={MixedFruitsLeft} alt="mixedfruitsleft" />
                    <img className="mixed-fruits-right" src={MixedFruitsRight} alt="mixedfruitsright" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DeliveryAndServices;
