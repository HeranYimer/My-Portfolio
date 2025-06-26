import React, { useEffect, useRef } from "react";
import heroImage from "../../assets/images/newbg.jpeg";
import "../../App.css";
import Typed from "typed.js";
import "aos/dist/aos.css";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer",
        "Freelancer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Clean up
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      {/* Background image with fade-in */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="hero-image"
        data-aos="fade-in"
        data-aos-duration="1000"
      />

      {/* Hero text container */}
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <h2 data-aos="zoom-in" data-aos-delay="500">
          Heran Yimer
        </h2>
        <p data-aos="fade-up" data-aos-delay="700">
          I'm <span ref={typedRef} className="typed" />
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
