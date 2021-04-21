import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.scss";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <div id="Navbar">
            <Navbar className="Navbar" collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand href="/">
                    <img alt="" src={Logo} width="200px" height="100%" className="Navbar-brand d-inline-block align-center nav-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/products">
                            Products
                        </Link>
                        <Link className="nav-link" to="/about">
                            About Us
                        </Link>
                        <Nav.Link className="call-button" href="tel:07842602888">
                            Call Now >
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
