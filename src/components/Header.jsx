import React, { useState } from "react";
import "../styles/global.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="#body" className="logo">
                Jingke L<span>.</span>
              </a>

              {/* Navigation menu */}
              <ul className={`nav ${menuActive ? "active" : ""}`}>
                <li><a href="#body" className="active" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#works" onClick={closeMenu}>Gallery</a></li>
                <li><a href="#services" onClick={closeMenu}>Information</a></li>
                <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
                <li><a href="#demo" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
              </ul>

              {/* Toggle button */}
              <button
                className={`menu-trigger ${menuActive ? "active" : ""}`}
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                <span>Menu</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
