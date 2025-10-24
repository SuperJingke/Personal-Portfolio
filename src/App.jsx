import React, { useEffect } from "react";
import { Suspense, lazy } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
// import Services from "./components/Services";
// import Resume from "./components/Resume";
// import Blog from "./components/Blog";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import "./styles/global.css";
const Services = lazy(() => import("./components/Services"));
const Resume = lazy(() => import("./components/Resume"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));



const App = () => {
  useEffect(() => {
    // Load external JS for animations and plugins after render
    const scriptUrls = [
      "/static/js/jquery-3.2.0.min.js",
      "/static/js/popper.min.js",
      "/static/js/bootstrap.min.js",
      "/static/js/jquery.appear.js",
      "/static/js/isotope.pkgd.min.js",
      "/static/js/particles.min.js",
      "/static/js/app.js",
      "/static/js/owl.carousel.min.js",
      "/static/js/main.js",
      "/static/js/form.js",
    ];
    scriptUrls.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);

  return (
    <div id="body" data-spy="scroll" data-target=".nav" data-offset="300">
      <Suspense fallback={<Preloader />}>
      <div className="template-wrapper">
        <Header />
        <Hero />
        <About />
        <Works />
        <Services />
        <Resume />
        <Blog />
        <Contact />
        <Footer />
      </div>
      </Suspense>
    </div>
  );
};

export default App;
