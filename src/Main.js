import React from "react";
import Directions from "./Directions";
import Prices from "./Prices";
import Promotions from "./Promotions";
import Faq from "./Faq";
import Download from "./Download";
import Slider from "./Slider";
import Subscribe from "./Subscribe";

export default function() {
  return (
    <div className="main">
      <Directions />
      <Prices />
      <Slider />
      <Subscribe />
      <Promotions />
      <Faq />
      <Download />
    </div>
  );
}
