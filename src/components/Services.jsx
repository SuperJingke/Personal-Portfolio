import React from "react";
import CountUp from "react-countup";
import "../styles/services.css";

const counters = [
  { icon: "icon-briefcase", number: 165, text: "work completed" },
  { icon: "icon-cup", number: 8, text: "new projects" },
  { icon: "icon-heart", number: 3, text: "+ years of Industry Experience" },
  { icon: "icon-trophy", number: 150, text: "Volunteering (hrs)" },
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
                <h2>
                  <CountUp end={number} duration={15} />
                </h2>
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
