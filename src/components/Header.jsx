import React from "react";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="#body" className="logo">
                Jingke L<span>.</span>
              </a>
              <ul className="nav">
                <li><a href="#body" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Gallery</a></li>
                <li><a href="#services">Information</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#demo">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <button className="menu-trigger" aria-label="Open menu">
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
