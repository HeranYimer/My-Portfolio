
import React, { useEffect, useState } from "react";
import "../../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      id="header"
      className={`header dark-background ${
        isShrunk ? "shrink" : ""
      } d-flex flex-column flex-md-row align-items-center justify-content-between`}
    >
      {/* Optional Toggle Button for Mobile */}
      <div className="d-md-none">
        <i className="header-toggle bi bi-list" onClick={toggleMenu}></i>
      </div>

      {/* Social Icons */}
      <div className="social-links d-none d-md-flex">
        <a
          href="https://www.linkedin.com/in/heran-yimer/"
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://x.com/HeranYimer"
          className="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter-x"></i>
        </a>

        <a
          href="https://wa.me/251943008464"
          className="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>

      {/* Nav Menu */}
      <nav id="navmenu" className={`navmenu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#hero" className="active">
              <i className="bi bi-house navicon"></i> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#resume">
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
