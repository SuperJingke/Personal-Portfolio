import React from "react";
import "../styles/preloader.css";

const Preloader = () => (
  <div className="preloader-area">
    <div className="loader">
      <p className="loader-msg">🌿Loading...</p>
      <div className="loader-inner"></div>
    </div>
  </div>
);

export default Preloader;
