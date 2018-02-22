import React, { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Search from "./Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/search" exact component={Search} />
        <Footer />
      </div>
    );
  }
}

export default App;
