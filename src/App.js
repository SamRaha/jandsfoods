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
            </div>
        </Router>
    );
}

export default App;
