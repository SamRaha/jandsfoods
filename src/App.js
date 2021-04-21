import React from "react";
import "./App.scss";
import NavbarigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";

function App() {
    return (
        <Router>
            <div className="App">
                <NavbarigationBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/products" exact component={Products} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
