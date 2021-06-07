import React from "react";
import Footer from "../components/Footer";
import "./About.scss";
import FamilyVector from "../assets/FamilyVector.svg";

function About() {
    return (
        <>
            <div className="about-container">
                <div className="clear"></div>
                <div className="about-header">
                    <div className="about-us">
                        <h1>A little about us</h1>
                        <p>
                            Established in 1977 by our founders, Tony Stevens and Bernard Hudson, J and S Foods began by distributing pies and cooked meats to customers throughout Yorkshire. From the outset, it was their core aim to provide a service
                            that could not be beat, whether it was an emergency order or a reliable daily delivery. <br></br>
                            <br></br>J and S Foods has become an established and versatile business, supplying the catering industry for over 44 years. Throughout our years in operation, we have supplied cafes, restaurants, schools, care homes,
                            street food stalls and festivals. Although our customers have changed and the products we sell have greatly diversified, our focus on building relationships and providing unbeatable service has remained core to the
                            company. <br></br> <br></br>The company is now owned by Tony and Bernard’s sons, Michael Stevens and John Hudson. After working in the business for many years, they now apply their knowledge and experience to provide a
                            foodservice that adapts to the needs of the customers. We are still the same family run business established all those years ago, with Michael’s son, Matthew, now working in the business. <br></br> <br></br> We are proud
                            to have customers up and down the country to keep us busy; whether that is supplying festivals and events or delivering wholesale food to our long-standing customers here in Leeds. Get in touch today to see how we can help
                            you and your business.
                        </p>
                    </div>
                    <div className="stars-container">
                        <div className="stars">
                            <div className="star-content">
                                <h2>5 star hygiene rating </h2>
                                <h2>40+ years experience</h2>
                                <h2>STS Accredited</h2>
                                <h2>Erudus Food Safety Compliant</h2>
                                <h2>Diverse product range</h2>
                                <h2>Full technical specifications, allergen information and nutritional data for all our products</h2>
                            </div>
                        </div>
                        <img className="family-vector" src={FamilyVector} alt="" />
                    </div>
                </div>
                <div className="about-block-container">
                    <h1 className="meet-the-team">Meet Some the Team</h1>
                    <div className="about-block">
                        <div className="about-image-block michael"></div>
                        <div className="about-text-block">
                            <h3>Michael Stevens</h3>
                            <p>
                                Michael has worked at J and S Foods for almost 40 years now, having undertaken every role within the business. Michael now oversees much of the daily tasks here at J and S whilst maintaining a close relationship with
                                customers and suppliers. Outside of work he enjoys working on his allotment, walking, keeping fit and watching sport.
                            </p>
                        </div>
                    </div>
                    <div className="about-block">
                        <div className="about-text-block">
                            <h3>John Hudson – Partner</h3>
                            <p>
                                John has been with the company since 1989 having also worked every role within J and S Foods. Today, he manages all parts of the business working closely with the staff, customers and suppliers to ensure the smooth
                                operation of the business. Aside from work, John enjoys cycling.
                            </p>
                        </div>
                        <div className="about-image-block john"></div>
                    </div>
                    <div className="about-block">
                        <div className="about-image-block matthew"></div>
                        <div className="about-text-block">
                            <h3>Matthew Stevens </h3>
                            <p>
                                Matthew joined the company in 2015 and has become an essential part of the business. Aside from talking about work to everyone all the time, he enjoys playing golf and spending as much time as possible with his wife
                                and two young boys.
                            </p>
                        </div>
                    </div>
                    <div className="about-block">
                        <div className="about-text-block">
                            <h3>Mark Kitchen</h3>
                            <p>Mark has been with J and S for almost ten years now, during this time he has become an important part of the daily operation of the company. Outside of work he enjoys playing golf, socialising and watching sport.</p>
                        </div>
                        <div className="about-image-block mark"></div>
                    </div>
                    <div className="about-block last">
                        <div className="about-image-block wesley"></div>
                        <div className="about-text-block">
                            <h3>Wesley Conlon</h3>
                            <p>Wes joined the J and S team shortly before the coronavirus pandemic, in this time he has become a great team member. In his spare time he enjoys socialising and playing football.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
