import React from "react";
import Map from "../components/Map";
import "./Contact.scss";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="clear"></div>
                <div className="map-and-details-container">
                    <div className="google-map-container">
                        <Map />
                    </div>

                    <div className="map-details-container">
                        <div className="where-we-are">
                            <h1> Where We Are</h1>
                            <p>
                                We’re located on Wyther Lane Industrial Estate in Kirkstall, just a 10 minute drive from Leeds City Centre. We’re also close to Headingley, Bramley, Burley, Horsforth and Woodhouse, and Bradford is just 20 minutes
                                away. <br></br>
                                <br></br> Unit C3, Wyther Lane Industrial Estate, Leeds, LS5 3AP
                            </p>
                        </div>
                        <div className="get-in-touch">
                            <h1> Get In Touch</h1>
                            <p>Telephone: 0113 278 8266</p>
                            <p>Email: info@jandsfoods.net</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-form-container">
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}

export default Contact;
