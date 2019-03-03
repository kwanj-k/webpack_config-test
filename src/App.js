import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import SignUp from "./components/SignUp";
import Products from "./components/Products/products";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/products" component={Products} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
