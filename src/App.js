import React, { Component } from "react";
import Header from "./Header";
import Directions from "./Directions";
import Prices from "./Prices";
import Promotions from "./Promotions";
import Faq from "./Faq";
import Download from "./Download";
import Footer from "./Footer";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Directions />
        <Prices />
        <Slider />
        <Subscribe />
        <Promotions />
        <Faq />
        <Download />
        <Footer />
      </div>
    );
  }
}

export default App;
