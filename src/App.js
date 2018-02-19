import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Search from "./Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Footer />
      </div>
    );
  }
}

export default App;
