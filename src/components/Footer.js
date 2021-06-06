import React from "react";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Decoration from "../assets/decoration.svg";
import "./Footer.scss";

function Footer() {
    return (
        <div className="footer-container">
            <div className="content">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <p>
                            <a href="tel:01132788266">0113 278 8266</a>
                        </p>
                        <p>Unit C3, Wyther Lane Industrial Estate, Leeds, LS5 3AP</p>
                        <p>
                            <a href="mailto:info@jandsfoods.net">info@jandsfoods.net</a>
                        </p>
                        <p>© J and S Foods 2021</p>
                        <div className="social-media">
                            <a href="https://twitter.com/jandsfoodsleeds?lang=en">
                                <img src={Twitter} alt="" />
                            </a>
                            <a href="https://www.facebook.com/jandsfoodsleeds">
                                <img src={Facebook} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-content-right">
                        <img src={Decoration} alt="" className="decoration" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
