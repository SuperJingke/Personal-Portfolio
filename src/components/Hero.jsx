import React from "react";
import "../styles/hero.css";

const Hero = () => (
  <section className="hero-area d-flex align-items-center" id="home">
    <div id="particles-js"></div>
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-5 d-none d-lg-block">
          <div className="hero-img d-flex align-items-center justify-content-center">
            <img className="img-fluid" src="/static/picture/hero-img.jpg" alt="Jingke" />
          </div>
        </div>
        <div className="hero-content col-lg-7">
          <div className="subheading text-uppercase">
            Hi Nice to meet you <span>:)</span>
          </div>
          <h1>I'm Jingke</h1>
          <div>
            A Passionate{" "}
            <span className="animated-info">
              <em className="animated-item">Developer.</em>
              <em className="animated-item">Analyst.</em>
              <em className="animated-item">Engineer</em>      
            </span>
          </div>

          <div className="social-icons d-flex">
            <a
              href="https://www.facebook.com/j.k.isa.liang/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-social-facebook"></i>
            </a>
            <a href="https://github.com/SuperJingke" target="_blank" rel="noreferrer">
              <i className="icon-social-github"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCnlYNLg4d96bQ6dBX1G3NgA"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-social-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jingkeliang/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-social-linkedin"></i>
            </a>
          </div>

          <a href="#about" className="btn" data-text="About Me">
            {"About Me".split("").map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
