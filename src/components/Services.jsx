import React from "react";
import "../styles/services.css";

const counters = [
  { icon: "icon-briefcase", number: 165, text: "work completed" },
  { icon: "icon-cup", number: 8, text: "new projects" },
  { icon: "icon-heart", number: "3+ years", text: "Industry Experience" },
  { icon: "icon-trophy", number: "150+", text: "Volunteering" },
];

const Services = () => (
  <div className="counter-area" id="services">
    <div className="container">
      <div className="row">
        {counters.map(({ icon, number, text }, i) => (
          <div className="col-lg-3 col-md-6 mb-4" key={i}>
            <div className="counter-content d-flex">
              <div className="icon-bg mr-4 d-flex align-items-center justify-content-center water-wave">
                <i className={icon}></i>
              </div>
              <div>
                <h2><span className="counter">{number}</span></h2>
                <p className="text-capitalize">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
