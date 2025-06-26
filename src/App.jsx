import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Preloader from "./components/Preloader/Preloader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import "./App.css";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <ScrollToTop />
      <Hero />
      <Portfolio />
      <About />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
