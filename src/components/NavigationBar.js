import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.scss";
import Logo from "../assets/logo2.jpg";
import LogoMobile from "../assets/logo3.png";
import { Link } from "react-router-dom";

function NavigationBar() {
    const [scroll, setScroll] = useState(1);

    // running on mount
    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY < 10;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        // setting the event handler from web API
        document.addEventListener("scroll", onScroll);
        // cleaning up from the web API
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [scroll, setScroll]);

    const [expanded, setExpanded] = useState(false);
    return (
        <div id="Navbar">
            <div className={`nav-background ${scroll === true ? `` : `border-bottom-black`}`}></div>
            <Navbar expanded={expanded} className="Navbar fixed-top" collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand href="/">
                    <img alt="" src={Logo} width="200px" height="100%" className="Navbar-brand d-inline-block align-center nav-logo desktop-logo" />
                    <img alt="" src={LogoMobile} width="200px" height="100%" className="Navbar-brand d-inline-block align-center nav-logo mobile-logo" />
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link onClick={() => setExpanded(false)} className="nav-link" to="/">
                            Home
                        </Link>
                        <Link onClick={() => setExpanded(false)} className="nav-link" to="/products">
                            Products
                        </Link>
                        <Link onClick={() => setExpanded(false)} className="nav-link" to="/deliveryandservices">
                            Delivery and Services
                        </Link>
                        <Link onClick={() => setExpanded(false)} className="nav-link" to="/about">
                            About Us
                        </Link>
                        <Link onClick={() => setExpanded(false)} className="call-button nav-link" to="/contact">
                            Contact Us
                            {/* <img src={Arrow} alt="" /> */}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
