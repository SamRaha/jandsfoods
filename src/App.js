import React from "react";
import "./App.scss";
import NavbarigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Pages/Contact";
import DeliveryAndServices from "./Pages/DeliveryAndServices";
import CookieConsent, { Cookies } from "react-cookie-consent";

function App() {
    return (
        <Router>
            <div className="App">
                <NavbarigationBar />
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/products" exact component={Products} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/deliveryandservices" exact component={DeliveryAndServices} />
                    </Switch>
                </ScrollToTop>
                <CookieConsent location="bottom" buttonText="I understand" cookieName="myAwesomeCookieName2" style={{ fontFamily: "Roboto sans-serif", background: "#164f39" }} buttonStyle={{ color: "#4e503b", fontSize: "13px" }} expires={365}>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </div>
        </Router>
    );
}

export default App;
