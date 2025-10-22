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
            <img className="img-fluid" src="/static/picture/3.jpg" alt="Boat Trip" />
            <h4>Boat Trip</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/2.jpg" alt="Snow Adventure" />
            <h4>Snow Adventure</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/12.jpg" alt="Lunch" />
            <h4>Food in Québec</h4>
          </div>
          
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/1.jpg" alt="Wildlife in Guelph" />
            <h4>Wildlife</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/4.jpg" alt="Toronto" />
            <h4>Nathan Square</h4>
          </div>
         
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/6.jpg" alt="Folk Music Band - flute" />
            <h4>Music Band</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/7.jpg" alt="Bike" />
            <h4>Biking</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/8.jpg" alt="Firework" />
            <h4>Firework in Xiangyang</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/9.jpg" alt="River-side" />
            <h4>Along the river</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/10.jpg" alt="dad's bike" />
            <h4>A Ride Back Home</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/11.jpg" alt="Gondola Lift" />
            <h4>Gondola Ride</h4>
          </div>
          <div className="col-lg-4 grid-item">
            <img className="img-fluid" src="/static/picture/5.jpg" alt="Cherry Blossom" />
            <h4>Whispers in Bloom</h4>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Works;
