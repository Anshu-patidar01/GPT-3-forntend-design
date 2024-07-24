import React from "react";
import "./App.css";

import {
  Features,
  Blog,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { Article, Cta, Brand, Navbar, Feature } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
