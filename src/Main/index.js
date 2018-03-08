import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Directions from './Directions';
import Prices from './Prices';
import Promotions from './Promotions';
import Faq from './Faq';
import Download from './Download';
import Slider from './Slider';
import Subscribe from './Subscribe';

export default function () {
  return (
    <div className="main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Header />
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
