import React, { Component } from "react";
import Header from "./Header/index.js";
import Directions from "./Directions/index.js";
import Prices from "./Prices/index.js";
import Promotions from "./Promotions/index.js";
import Faq from "./Faq/index.js";
import Download from "./Download/index.js";
import Footer from "./Footer/index.js";
import Slider from "./Slider/index.js";
import Subscribe from "./Subscribe/index.js";
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
