import React, { useEffect } from "react";
import "../styles/hero.css";
import particlesJS from "particles.js";


const Hero = () => {
  useEffect(() => {
    if (particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 500, density: { enable: true, value_area: 800 } },
          color: { value: ["#f6f6fc", "#fff", "#f6f6fc", "#fff", "#f6f6fc"] },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 4 },
          },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
          },
          size: { value: 2, random: true },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0 },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <section className="hero-area d-flex align-items-center" id="home">
      {/* Particle background */}
      <div id="particles-js"></div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-img d-flex align-items-center justify-content-center">
              <img
                className="img-fluid"
                src="/static/picture/hero-img.jpg"
                alt="Jingke"
              />
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
              <a
                href="https://github.com/SuperJingke"
                target="_blank"
                rel="noreferrer"
              >
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
};

export default Hero;
