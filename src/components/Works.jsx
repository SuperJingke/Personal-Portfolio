import React from "react";
import "../styles/works.css";

const Works = () => {
  return (
    <section className="works-area section-padding" id="works">
      <div className="section-title">
        <h3>Portfolio</h3>
        <span></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/1.jpg" alt="Wildlife" />
            <h4>Wildlife</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/2.jpg" alt="Snow Adventure" />
            <h4>Snow Adventure</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/3.jpg" alt="Boat Trip" />
            <h4>Boat Trip</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
