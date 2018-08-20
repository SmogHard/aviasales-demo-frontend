import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Search from './Search';
import './App.css';

export default function () {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route path="/search" component={Search} />
      <Footer />
    </div>
  );
}
