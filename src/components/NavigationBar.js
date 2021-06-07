import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.scss";
import Logo from "../assets/logo2.jpg";
import LogoMobile from "../assets/logo3.png";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow-vector.svg";

function NavigationBar() {
    const [expanded, setExpanded] = useState(false);
    return (
        <div id="Navbar">
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
                        <Link onClick={() => setExpanded(false)} className="nav-link" to="/about">
                            About Us
                        </Link>
                        <Nav.Link onClick={() => setExpanded(false)} className="call-button" href="tel:01132788266">
                            Call Now <img src={Arrow} alt="" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
