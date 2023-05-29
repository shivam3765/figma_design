import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Help from "./components/Help";
import React from "react";
import './App.css'


function App() {
  return (
    <>
      <Navbar /> 
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <Help />
    </>
  );
}

export default App;
